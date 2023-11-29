//-----Variaveis importantes
let head = document.querySelector('head')


/*----------------------------------------------------------------*/
function Start(items){
    /*
    *------------EXAMPLE------------                
    *
    *   Start( {
    *       title: 'Duck Shop ', 
    *       icon: 'URL for you image',
    *       description: 'The best Shop for ducks',
    *       keywords: 'Duck Shop, Shop for Ducks, the best shop for ducks',  { #Separate the words with , } 
    *       author: 'Severiano'
    *   } )
    *
    */

    //-------------------------//
    let tagTitle = document.createElement('title')
    let tagIcon = document.createElement('link')
    let tagDescription = document.createElement('meta')
    let tagKeywords = document.createElement('meta')
    let tagAuthor = document.createElement('meta')
    let tagCharset = document.createElement('meta')
    let tagViewPort = document.createElement('meta')

    //-------------------------//
    tagTitle.innerHTML = items.title
    tagCharset.setAttribute('charset', 'UTF-8')
    tagViewPort.setAttribute('name', 'viewport')
    tagViewPort.setAttribute('content', 'width=device-width, initial-scale=1.0')

    tagIcon.setAttribute('rel', 'icon')
    tagIcon.setAttribute('href', `${items.icon}`)

    tagDescription.setAttribute('name', 'description')
    tagDescription.setAttribute('content', `${items.description}`)

    tagKeywords.setAttribute('name', 'keywords')
    tagKeywords.setAttribute('content', `${items.keywords}`)

    tagAuthor.setAttribute('name', 'author')
    tagAuthor.setAttribute('content', `${items.author}`)

    //-------------------------//
    let groupTags = [
        tagTitle,
	    tagIcon,
        tagDescription,
        tagKeywords,
        tagAuthor,
        tagCharset,
        tagViewPort
    ]
    //-------------------------//
    groupTags.map((tags) => {
        head.appendChild(tags)
    })
}

export { Start }
