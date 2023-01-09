import * as JsSearch from "js-search";

// Based on https://www.dolthub.com/blog/2021-11-29-gatsby-search-and-pagination/

function useJsSearch(modules) {
  // Search configuration
  const dataToSearch = new JsSearch.Search("name");
  // TODO: understand how JsSearch works and which parameters we want to use here
  dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
  dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

  // Fields to search
  dataToSearch.addIndex("name");
  dataToSearch.addIndex(["moduleTxt", "description"]);
  dataToSearch.addIndex(["moduleTxt", "tags"]);

  dataToSearch.addDocuments(modules);

  function search(query) {
    return dataToSearch.search(query);
  }

  return {
    search,
  };
}

export default useJsSearch;