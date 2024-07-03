let map = document.querySelector("#map");

let files = [
  "UKRAINE2019.gpx","ALBANIA2017.gpx","NORWAY2022.gpx","OCADO20172018.gpx"
];


function tostr(x){
  let output = 'https://gpxstudio.github.io/?state=%7B%22urls%22:%5B'
  for (let file of x) {
    output = output + "%22https%3A%2F%2Fraw.githubusercontent.com%2FUP941374%2FGPS%2Fmain%2Fmerged%2F" + file + "%22,"
  }
  mapsrc = output.slice(0, -1);
  mapsrc = mapsrc + '%5D%7D&embed'
  return mapsrc;
}

map.src = tostr(files);
