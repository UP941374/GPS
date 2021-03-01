let map = document.querySelector("#map");

let files = [
  "20190727-003111.gpx",
  "20190727-063938.gpx",
  "20190728-101848.gpx",
  "20190729-090318.gpx",
  "20190729-154931.gpx",
  "20190730-101741.gpx",
  "20190730-150145.gpx",
  "20190730-195305.gpx",
  "20190731-094032.gpx",
  "20190731-141118.gpx",
  "20190801-100733.gpx",
  "20190802-090800.gpx",
  "20190803-090959.gpx",
  "20190804-122540.gpx",
  "20190804-155250.gpx",
  "20190804-202554.gpx",
  "20190805-100637.gpx",
  "20190805-154049.gpx",
  "20190806-085720.gpx",
  "20190807-084752.gpx",
  "20190809-093342.gpx",
  "20190809-145231.gpx",
  "20190810-104414.gpx",
  "20190810-133501.gpx",
  "20190811-084152.gpx",
  "20190811-135813.gpx"
];


function tostr(x){
  let output = 'https://gpx",studio.github.io/?state=%7B%22urls%22:%5B'
  for (let file of x) {
    output = output + "%22https%3A%2F%2Fraw.githubusercontent.com%2FUP941374%2FGPS%2Fmain%2Fgpx",%2FUKRAINE"2019%2F" + file + "%22,"
  }
  mapsrc = output.slice(0, -1);
  mapsrc = mapsrc + '%5D%7D&embed'
  return mapsrc;
}

map.src = tostr(files);
