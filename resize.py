import cv2
from PIL import Image, ImageOps
import os, sys

for item in os.listdir('.'):
	f, e = os.path.splitext(item)
	if item.endswith('.jpg') and 'small' not in item: 
		im = Image.open(item)
		size = im.size
		new_size = tuple([int(x*0.25) for x in size])
		im = im.resize(new_size, Image.ANTIALIAS)
		im = ImageOps.exif_transpose(im)
		im.save(f + '-small' + e, 'JPEG', quality=90)
	if item.endswith('.mp4'):
		vidcap = cv2.VideoCapture(item)
		for i in range(30):
			_, im = vidcap.read()
		h, w, _ = im.shape
		w //= 4
		h //= 4
		cv2.resize(im, (w, h))
		cv2.imwrite(f + '-small.jpg', im)
