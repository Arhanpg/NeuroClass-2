"""ZIP archive extraction and file tree mapping."""
import zipfile
import io

def parse_zip(content: bytes) -> dict:
    file_tree = {}
    with zipfile.ZipFile(io.BytesIO(content)) as zf:
        for info in zf.infolist():
            if not info.is_dir():
                file_tree[info.filename] = {"size": info.file_size, "content": zf.read(info.filename).decode("utf-8", errors="ignore")[:5000]}
    return file_tree
