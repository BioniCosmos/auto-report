const date = new Date()
date.setTime(date.getTime() + 24 * 60 * 60 * 1000)

const year = date.getFullYear()
const getMonth = month => month < 10 ? '0' + month : month
const getDay = day => day < 10 ? '0' + day : day

const postData = {
    punch_form: '<form>',
    date: `${year}-${getMonth(date.getMonth() + 1)}-${getDay(date.getDate())}`
};

(async () => {
    try {
        const resp = await $.ajax({
            url: `/punchForm`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(postData)
        })
        console.log(resp)
    } catch (err) {
        console.error(err)
    }
})()
