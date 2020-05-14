del /F /Q .\buildDist
mkdir .\buildDist\assets
mkdir .\buildDist\chapters
copy  .\chapters\* .\buildDist\chapters\*
copy  .\assets\* .\buildDist\assets\*
parcel build -d buildDist index.html
