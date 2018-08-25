module.exports = class Pagination {
  static template (page, perPage, total, data) {
    return {
      total: parseInt(total, 10),
      page: parseInt(page, 10),
      perPage: parseInt(perPage, 10),
      lastPage: Math.ceil(total / perPage),
      data
    }
  }
}
