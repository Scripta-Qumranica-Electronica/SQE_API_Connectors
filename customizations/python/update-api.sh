#!/bin/sh

VERSION="$1"
LIBPATH="$2"

if [ -z "$LIBPATH" ]
then
  LIBPATH="libs/python/qumranica"
fi

if [ ! -d "$LIBPATH" ]
then
  echo "Error: the path $LIBPATH doesn't exist."
  exit 1
fi

echo `sed -i 's!host="http://localhost"!host="https://api.qumranica.org"!g' "$LIBPATH/configuration.py"`
echo `sed -i 's!No description provided (generated by Openapi Generator!Python connector to the [qumranica](https://qumranica.org) [api](https://api.qumranica.org/swagger) (generated by Openapi Generator!g' "$LIBPATH/../README.md"`
echo `sed -i 's!pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git!pip install qumranica!g' "$LIBPATH/../README.md"`
echo `sed -i 's!setup(!from os import path\nthis_directory = path.abspath(path.dirname(__file__))\nwith open(path.join(this_directory, "README.md"), encoding="utf-8") as f:\n    long_description = f.read()\n\nsetup(!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!author_email="team@openapitools.org",!author_email="bronsonbdevost@gmail.com",!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!author="OpenAPI Generator community",!author="Bronson Brown-deVost",!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!description="SQE API",!description="Qumranica API Python connector",!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!    long_description=".*!!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!    No description provided .*!!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!    """!    long_description=long_description,\n    long_description_content_type="text/markdown"!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!SQE API!Qumranica API!g' "$LIBPATH/../setup.py"`
echo `sed -i 's!url=""!url="https://qumranica.org"!g' "$LIBPATH/../setup.py"`

exit 0