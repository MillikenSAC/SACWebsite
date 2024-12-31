import os
from PIL import Image

def convert_resize_and_delete_recursive(directory):
    """
    Recursively convert all image files in the directory (and subdirectories) to WebP format,
    reduce their resolution by half, and delete the original files.
    :param directory: Path to the root directory.
    """
    # Supported image formats
    supported_formats = (".png", ".jpg", ".jpeg", ".bmp")

    print(f"Scanning directory: {directory}")

    # Walk through all directories and files
    for root, _, files in os.walk(directory):
        for filename in files:
            file_path = os.path.join(root, filename)
            
            # Skip if not a supported format
            if not filename.lower().endswith(supported_formats):
                continue
            
            # Open the image, resize, and convert to WebP
            try:
                with Image.open(file_path) as img:
                    # Reduce resolution by half
                    new_width = img.width // 2
                    new_height = img.height // 2
                    img_resized = img.resize((new_width, new_height))
                    
                    # Save as WebP
                    webp_filename = os.path.splitext(filename)[0] + ".webp"
                    webp_path = os.path.join(root, webp_filename)
                    img_resized.save(webp_path, "webp")
                    print(f"Converted and resized '{file_path}' to '{webp_path}'.")
                
                # Delete the original file
                os.remove(file_path)
                print(f"Deleted original file: '{file_path}'")
            except Exception as e:
                print(f"Failed to process '{file_path}': {e}")

if __name__ == "__main__":
    # Start scanning from the current directory
    current_directory = os.getcwd()
    convert_resize_and_delete_recursive(current_directory)