
const getMarketPlaceData = () => {
    const data = $("div.shortcut_navigable")
    const json_data = []
    let price, id, id_release, title, label, cat, price_con
    for (s of data) {
        id = s.children[0]
        id = $(id).attr('href').replace('/sell/item/', '').replace('?ev=bp_img', '')

        price = s.children[2].children[0].innerText
        id_release = s.dataset.releaseId.replace('\n', '').trim()
        title = s.children[3].outerText
        label = s.children[5].innerText
        cat = s.children[5].innerText
        if (label == "Unavailable in Czech Republic") {
            label = s.children[6].innerText.replace('Label:', '').split('\n')[0].trim()
        } else {
            label = s.children[5].innerText.replace('Label:', '').split('\n')[0].trim()
        }



        json_data.push({
            id_marketplace: id,
            id_release: id_release,
            price: price,
            title: title,
            label: label,
        })

    }
    console.log(json_data)
}
getMarketPlaceData()