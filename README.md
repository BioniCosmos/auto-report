# Auto Report

经常忘记打卡，又或是觉得打卡很麻烦？那么不妨试试「Auto Report」。

## 适用人群

students in SUT

## 快速开始

### GitHub Actions

点击右上角的「Use this template」即可从本模版创建新仓库。

之后需要在仓库首页 ->「Settings」->「Secrets」->「Actions」->「New repository secret」分别创建三个 Actions 密钥。

- `ACCOUNT`：账号
- `PASSWORD`：密码
- `FORM`：表单的 [Base64 编码](https://www.base64encode.org)

表单的具体内容如下：

```json
{
    "mqszd": "沈阳市",
    "sfybh": "否",
    "mqstzk": "良好",
    "jcryqk": "未接触下述五类人员",
    "glqk": "自行做好防护",
    "jrcltw": "36.3",
    "sjhm": "13000000000",
    "jrlxfs": "15000000000",
    "xcsj": "",
    "gldd": "",
    "zddw": "中国,辽宁省,沈阳市,铁西区<@>沈阳工业大学"
}
```

> **`mqszd`**: `"沈阳市"` | `"辽宁省非沈阳市"` | `"其他地区（非辽宁省）"`

目前所在地

> **`sfybh`**: `"否"` | `"是"`

前一日填报到目前为止，目前所在地（第 1 题）是否存在变化？

> **`mqstzk`**: `"良好"` | `"干咳乏力、发热、呼吸困难等病症"` | `"医学观察隔离"` | `"疑似病例"` | `"确诊病例"`

目前身体状况

> **`jcryqk`**: `"未接触下述五类人员"` | `"确诊病例"` | `"疑似人员"` | `"医学观察人员"` | `"中高风险地区出入人员"`

近 14 日接触人员情况

> **`glqk`**: `"自行做好防护"` | `"医学隔离观察"` | `"按要求定点隔离"`

隔离情况

> **`jrcltw`**: string

今日测量体温（℃）

> **`sjhm`**: string

目前个人手机号码

> **`jrlxfs`**: string

家人联系方式

> **`xcsj`**: string

行程出发时间、使用的交通工具及车次/航班号、外出原因

> **`gldd`**: string

隔离起始时间、隔离地点

> **`zddw`**: `"x 国,x 省,x 市,x 区<@>x"`

个人位置

设置完毕后，该任务会在每天的 10:10 UTC+8（即 2:10 UTC）自动执行。您也可以在 Actions 页面上手动将其触发。

### 服务器部署

本项目同时支持在服务器上部署。配置计划任务前请检查服务器时间和时区是否正确。

```shell-session
# timedatectl set-timezone Asia/Shanghai
```

## Credits

感谢 [@usbcsusb](https://github.com/usbcsusb) 提供的思路以及 [@DamoclesYW](https://github.com/DamoclesYW) 给我开发的动力。

## License

[MIT](https://github.com/BioniCosmos/auto-report/blob/master/LICENSE)

© 2022 Daniel Ding
