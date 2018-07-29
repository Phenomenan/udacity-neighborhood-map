const cId = '5EPNEFFEDRIBVFOCCY0DB4JJVKNWPS5KAFCBVQQS4FKJKO04';
const cSecret = 'K3W2LLAN4TZK2TDLM4D12OGXHM35IRNDISMWWVOURRCADO2N';
const v = '20180407'

export const getVenueDetails = (venue) =>
    fetch(`https://api.foursquare.com/v2/venues/${venue}?client_id=${cId}&client_secret=${cSecret}&v=${v}`, {
        headers: {}
    })
    .then(response => response.json())
    .then(r => r)


export const getVenueLists = (venue) =>
    fetch(`https://api.foursquare.com/v2/venues/${venue}/listed?client_id=${cId}&client_secret=${cSecret}&v=${v}`, {
        headers: {}
    })
    .then(response => response.json())
    .then(r => r)
