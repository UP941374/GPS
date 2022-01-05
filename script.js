let map = document.querySelector("#map");

let files = [
"20201024_153359.gpx",
"20201102_143231_R.gpx",
//brighton trip "20201104_124059.gpx",
"20201129_155500.gpx",
"20210123_150533.gpx",
"20210125_164819.gpx",
"20210128_145001.gpx",
"20210202_170405.gpx",
"20210206_152646.gpx",
"20210208_203144.gpx",
"20210209_185940.gpx",
"20210210_170522.gpx",
"20210216_203617.gpx",
"20210218_125325.gpx",
"20210221_142851.gpx",
"20210224_151116.gpx",
"20210227_164436.gpx",
"20210228_141339C.gpx",
"20210302_173942.gpx",
"20210311_122252.gpx",
"20210313_145655.gpx",
"20210321_104805.gpx",
"20210327_124522.gpx",
"20210507_175542.gpx",
"20210512_133930.gpx",
"20210923_201800.gpx",
"20211205_133400.gpx",
"20220105_143300.gpx"
];

function tostr(x){
  let output = 'https://gpxstudio.github.io/?state=%7B%22urls%22:%5B'
  for (let file of x) {
    output = output + "%22https%3A%2F%2Fraw.githubusercontent.com%2FUP941374%2FGPS%2Fmain%2FGPX%2FSPACERY%2F" + file + "%22,"
  }
  mapsrc = output.slice(0, -1);
  mapsrc = mapsrc + '%5D%7D&embed'
  return mapsrc;
}

map.src = tostr(files);
