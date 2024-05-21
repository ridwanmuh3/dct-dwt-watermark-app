from imwatermark import WatermarkEncoder, WatermarkDecoder
import cv2 as cv
import os


def embed_image(imgPath: str, watermark: str):
    img = cv.imread(imgPath)

    encoder = WatermarkEncoder()
    try:
        encoder.set_watermark("bytes", watermark.encode("utf-8"))
    except Exception as e:
        raise Exception("Error setting watermark:", e)

    try:
        img_encoded = encoder.encode(img, "dwtDct")
        
        cv.imwrite(
            os.path.join("uploads", f"embed-wm-{imgPath.split("\\")[-1]}"), img_encoded
        )
        embed_img_path = f"embed-wm-{imgPath.split("\\")[-1]}" 
 
        return embed_img_path
    except Exception as e:
        raise Exception("Error encoding watermark:", e)


def extract_watermark(imgPath, watermark_length):
    img = cv.imread(imgPath)

    try:
        decoder = WatermarkDecoder("bytes", watermark_length * 8)
    except Exception as e:
        raise Exception("Error decoding watermark:", e)

    try:
        watermark_text = decoder.decode(img, "dwtDct")
        return watermark_text.decode('utf-8', 'ignore')
    except Exception as e:
        raise Exception("Error on extracting watermark:", e)

