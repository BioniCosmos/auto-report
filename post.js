const date = new Date()
date.setTime(date.getTime() + 24 * 60 * 60 * 1000)

const year = date.getFullYear()
const getMonth = month => month < 10 ? '0' + month : month
const getDay = day => day < 10 ? '0' + day : day

const form = {
    mqszd: '***',
    sfybh: '否',
    mqstzk: '良好',
    jcryqk: '未接触下述五类人员',
    glqk: '自行做好防护',
    jrcltw: '36.3',
    sjhm: '***********',
    jrlxfs: '***********',
    xcsj: '',
    gldd: '',
    zddw: '中国,**省,**市<@>******'
}

const postData = {
    date: `${year}-${getMonth(date.getMonth() + 1)}-${getDay(date.getDate())}`,
    punch_form: JSON.stringify(form)
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
