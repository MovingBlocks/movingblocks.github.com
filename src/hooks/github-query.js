export const moduleQuery = `
query modules { 
  organization(login:"Terasology"){
    repositories(first: 10) {
      nodes {
        name
        description
        url
        
        openGraphImageUrl
        usesCustomOpenGraphImage
        
        readme: object(expression: "develop:README.md") {
          ...on Blob {
            text
          }
        }
        moduleTxt: object(expression: "develop:module.txt") {
          ...on Blob {
            text
          }
        }
      }
    }
  }
}`;

export default moduleQuery;
