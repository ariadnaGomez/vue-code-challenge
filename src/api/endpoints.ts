function factory() {
  return {
    get basePath() {
      return `${process.env.VUE_APP_BASE_PATH}`
    },
    get grocery() {
      return `/grocery`
    },
  }
}
export default factory()
