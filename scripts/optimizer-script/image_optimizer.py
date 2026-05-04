import os
from PIL import Image


# --- INSTRUCTIONS TO USE SCRIPT ---
# 1. Install pillow
# 2. Add image files to ../pre_crop
# 3. You will find the optimized image files in ../post_opt

def center_crop(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    extensions = ('.jpg', '.jpeg', '.png', '.bmp', '.webp')

    for filename in os.listdir(input_folder):
        if filename.lower().endswith(extensions):
            input_path = os.path.join(input_folder, filename)
            with Image.open(input_path) as img:
                img_width, img_height = img.size
                
                if img_width > img_height:
                    crop_width = img_height 
                    crop_height = img_height
                elif img_height > img_width:
                    crop_width = img_width
                    crop_height = img_width 
                else:
                    crop_width = img_width
                    crop_height = img_height

                left = (img_width - crop_width) // 2
                top = (img_height - crop_height) // 2
                right = (img_width + crop_width) // 2
                bottom = (img_height + crop_height) // 2
                
                cropped_img = img.crop((left, top, right, bottom))
                output_path = os.path.join(output_folder, f"{filename}")
                cropped_img.save(output_path)
                print(f"Cropped: {filename}")

center_crop("pre_crop", "post_crop") 


def optimize_batch(input_folder, output_folder, size=(800, 800)):
    
    os.makedirs(output_folder, exist_ok=True)

    for file in os.listdir(input_folder):
        input_path = os.path.join(input_folder, file)
        name, _ = os.path.splitext(file)
        output_path = os.path.join(output_folder, name + ".webp")

        try:
            with Image.open(input_path) as img:
                img = img.convert("RGB")
                img.thumbnail(size)
                img.save(output_path, "WEBP", quality=95)
                print(f"Optimized: {file}")
        except Exception as e:
            print(f"Skipped {file}: {e}")

optimize_batch("post_crop", "post_opt")