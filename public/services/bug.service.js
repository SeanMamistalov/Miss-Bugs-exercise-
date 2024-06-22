const BASE_URL = "/api/bug";
export const bugService = {
  query,
  getById,
  save,
  remove,
  createDefaultFilter,
  onDownloadPdf,
};

function query(filterBy) {
  const { txt, minSeverity = +minSeverity } = filterBy;
  console.log("🚀 ~ query ~ minSeverity:", minSeverity);
  console.log("🚀 ~ query ~ txt:", txt);
  return axios
    .get(`${BASE_URL}?minSeverity=${minSeverity}&txt=${txt}`)
    .then((res) => res.data);
}
function getById(bugId) {
  return axios
    .get(BASE_URL + `/${bugId}`)
    .then((res) => res.data)
    .catch(console.log);
}
function remove(bugId) {
  return axios.get(BASE_URL + `/${bugId}/remove`).then((res) => res.data);
}
function save(bug) {
  const { _id, description, title, createdAt, severity } = bug;
  if (bug._id) {
    return axios
      .get(
        BASE_URL +
          `/save?_id=${_id}&severity=${severity}&title=${title}&createdAt=${createdAt}&description=${description}`
      )
      .then((res) => res.data);
  } else {
    return axios
      .get(
        BASE_URL +
          `/save?severity=${severity}&title=${title}&createdAt=${createdAt}&description=${description}`
      )
      .then((res) => res.data);
  }
}

function createDefaultFilter() {
  return { txt: "", minSeverity: 0 };
}

function onDownloadPdf() {
  console.log("in front download");
  return axios.get(BASE_URL + "/download").then((res) => res.data);
}
