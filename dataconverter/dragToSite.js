const getMarketPlaceData = () => {
    const data = $("tr.shortcut_navigable ")
    const json_data = []
    let price, id, id_release, title, label
    for (let i = 0; i < data.length; i++) {
        let s = data[i]
        id = s.children[0].children[0].pathname.replace("/sell/item/", '')
        id_release = s.dataset.releaseId
        price = s.children[4].innerText.split("\n")[0]
        title = s.children[1].innerText.split('\n')[0].replaceAll(`\"`, `\'`)
        label = s.children[1].innerText.split('Label:')[1].split("Cat#:")[0].replace('\n', '')

        json_data.push({
            id_marketplace: id,
            id_release: id_release,
            price: price,
            title: title,
            label: label
        })

    }
    console.log(json_data)
}
getMarketPlaceData()
