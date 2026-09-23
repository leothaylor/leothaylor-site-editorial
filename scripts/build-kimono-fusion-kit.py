from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "_download-src" / "kimono-fusion" / "v1" / "KIMONO-FUSION-EXTENSION-KIT-v1"
OUTPUT = ROOT / "public" / "downloads" / "kimono-fusion" / "kimono-fusion-extension-kit-v1.zip"
STAMP = (2026, 9, 15, 0, 0, 0)

if not SOURCE.is_dir():
    raise SystemExit(f"Kit source not found: {SOURCE}")

OUTPUT.parent.mkdir(parents=True, exist_ok=True)

with zipfile.ZipFile(OUTPUT, "w") as archive:
    for path in sorted(SOURCE.rglob("*")):
        if not path.is_file():
            continue
        arcname = str(Path(SOURCE.name) / path.relative_to(SOURCE))
        info = zipfile.ZipInfo(arcname, date_time=STAMP)
        info.compress_type = zipfile.ZIP_DEFLATED
        info.create_system = 3
        info.external_attr = (0o644 & 0xFFFF) << 16
        archive.writestr(
            info,
            path.read_bytes(),
            compress_type=zipfile.ZIP_DEFLATED,
            compresslevel=9,
        )

with zipfile.ZipFile(OUTPUT, "r") as archive:
    bad_file = archive.testzip()
    names = archive.namelist()

if bad_file is not None:
    raise SystemExit(f"ZIP integrity check failed at: {bad_file}")

if len(names) != 17:
    raise SystemExit(f"Unexpected kit file count: {len(names)}")

print(f"Built {OUTPUT.relative_to(ROOT)} with {len(names)} files ({OUTPUT.stat().st_size} bytes)")
