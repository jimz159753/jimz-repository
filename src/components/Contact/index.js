import React, { Component } from 'react'
import { Row, Col, Input } from 'antd';
import './index.scss'

const { TextArea } = Input;

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-content'>
                <div className='contact-title'>
                    <h1>CONTACTANOS</h1>
                    <p>Consectetur enim laboris ea eiusmod occaecat nostrud. Est ad ipsum occaecat anim id enim culpa aliqua veniam culpa. Do exercitation enim enim minim ex.</p>
                    <p>contact@gmail.com</p>
                </div>
                <div className='contact-body'>
                    <Row>
                        <Col span={8}>
                            <h1>LOGOTIPO O</h1>
                            <p>Adipisicing ea magna est et aliquip proident ex. Et sunt duis enim pariatur cillum reprehenderit occaecat consectetur adipisicing labore. </p>
                        </Col>
                        <Col span={8}>
                            <h1>MENU</h1>
                            <h4>Servicios</h4>
                            <h4>Proyectos</h4>
                            <h4>Contactos</h4>
                        </Col>
                        <Col span={8}>
                            <h1>QUEREMOS CONOCERTE</h1>
                            <Input placeholder='Nombre' />
                            <Input placeholder='Correo' />
                            <Input placeholder='Tema' />
                            <TextArea placeholder='Descripción' />
                        </Col>
                    </Row>
                </div>
                <div className='contact-footer'>
                    <p>Cillum dolor voluptate</p>
                    <div>
                        <img src='https://e7.pngegg.com/pngimages/807/688/png-clipart-computer-icons-logo-graphy-instagram-icon-instagram-desktop-wallpaper-share-icon-thumbnail.png' width='30px' />
                        <img src='https://png.pngtree.com/element_our/md/20180518/md_5aff6081b74c8.jpg' width='30px' />
                        <img src='data:image/png;base64,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' width='30px' />
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX////XFDrWADDVACTVACjVACbWADPWAC7VACvXEDjUACDVACzVACPUAB7WBTT//f7++Pn76+7vsbrnipf32d387vDwt7/roKrUABnfVmvokZ365unurLX319zzxMvqmaTjcoLlf430yc/aLErgYHPianzbN1LZH0PcRFzgXnHjcID44OPcP1j1z9XmhZL32N3dTWPaNE4KbLnYAAANS0lEQVR4nN1d10LqQBA1PRuSACJVpIiAinrx/3/uAkooKXNmsyl4nvQhJJPsTjlT9u6uDDRbj8+9fmf+PvxYfS/Wa01brxer7XLeGU+e2q1SnqEwPE6ms1fN9C3X0e1Q7KEdsPsjtHXHNLxw9TKaPFb9oDLoTjpD17Mc+yhUCnaSOqanv02fmlU/MgOtydfCtJwwW7ZLOR0jfBu3q35yCJvp1rd0XLiTlLYbfIw2VT8/gc1obTghX7pISsdf9btVS5GKVn8VOBIf7xKh6708Vy1KIp6WvptbvB/YxrpfNyvSHK88W414BwhX79RpsXZHpptj8yXL6AxmdVGtrU4j/+5Lgm5+1WGtNqdWMfJpB83ar1q+u7FQpV6SZTQX1erVz4VVpHx7hMGyuqXaevdU65ck6PqkIgF7tlOCfDsIb1mFV95684teoCc463+lC/gc6qXJp+0/Y9lKtTMo7wP+wF+WKV/31SxZvh2cVXlu3Kej0gWFYesPJQk4Dspeob8Q1mcpAn4F1ci3F9HrlSDg0qpMwJ2IwX3hAg7dCgXcwStYxNZrSW5MOgbFLtTXUs18Mrwig41tri+457l3OBHfkj8TFGc0XhpyjxTqrmVYZrj62A6H24+F1jB3/zd0BmN88Xt2UezGUkLJhLrpaduv8WRz4ZA025vJeL4VnmtLSBkuigk1OmwzYZvW91cv64VvxstQgkF2XooQcOzxniI0rWWmdEc8jb49bhLAGqkX8JnlyQjHGPZw8uFp7pg8GT3l/lubwzcJ1xkxM4Kt+4XBWawiVE3efOO3F6YmFa32vjmslv6mVsB33BA2GtLR+H2D4VD4Sn0bXMvYRh4d0Fri3I+wFK5TeBMKY5gzI98z4eBaV0hrfICbMDTHue/V3cIESaDMQZ2Cpt79UOJNzX1QQrFWcbsdHjEVJ4K5ohv2UdNrKmIYt9AaFYY63XYPKjbhKFE299CiCUOVIc0Y/IqOCuetBYU49lotlznF9qKwFNy2g9h6e6Hah1pioWijk/tOj8h6CdfqM3yYhRJm7jsvAT9KKF6iB7QNSIM3pjnvswE+oXALIRXuDURCIXLe5oX2oYTxlPkT3c3mUWopDSH/zcpnpB4AwxSke2qfo7e1H/i+F6xf+tnvIQFtyCqG21wSLunX6MzSHnCkGVH9pbAb/qLP5I8gNa4FeXz9Nr0LxSLl0pl/XWUj3JDnmLegkCaXrpnTitRILgcdeUmXCovnm0+Rj5j2jhG06FonM/EFtr/TIiDb4UQ8XUid+vL+4piM1MJV0nUTP91aiwGnNmaGsBo5nNMP8hN6Sa+vn5kiFh5DqX4iH1F+mdLW3kmKCKfEZaLBsI5rRNcEsh4HqayFkfCsdOCjMyj5EaJrXFnuhHx/boKaQahxBr/ygERRtiQl9UT9uNDiFryLMB7hN/4UyDKV5WvIReomsCSvkC9p4PoU8Kp2Ck/OraHenjDjnxBk5cIh/BRjJGdpSnnfpMfmfMWvQanxAA4o/yEb0ZGK9MmXl+CvAbHWD1y8ZGQA/JxcfEFtgIRffYJTjAztB6kaR0ZC6pcT1v4QzsAxtB+kaiwJm/9IbCnhxvQMZLt+YcIbEQoSDQnnu0d43fZ77JJ3TvIP7sErTJlSry7+my0o1DleDltE6lUfIJOUpfZUnKe855QN48r0GTGxMuaCCH4TNCmWwDlKCDvLT8jSSNgzFNrEm3NiTneXVfmNL6tHRH+F/LKFB+LNGbFyFmi/RMC/YRfxkyRMPvW88cgQIhxOEsL7sIvsQ/HKlrCfrUrDj9gVUDQeAdelEBuVzBdl4iv7i9iz2IPwyttxE91F9qEEVUP4SnFF8ckrXDRhNwvahxISEuYwvsj6rOJaYcNPAulSwWANfvGavavikROxrK+fKL6P0/CvoH24yv6G8fQ5HlfsoeOFKRhlir+xSMLsb2jGLkDLpn7A4P8myAaXsIeLTAkTthHPWPg47w15EgziB5QwprqaGkfChOAyFVD0ZPPrvrkSYlU3R3AWFcR6S3je31wJWU0inGwR5A0yNNcR2Yoj7yrltBG+ISpMIg+cHezFiaQmS9NYjIR+9n75hURuJtu8CS12AUdCluaD/F3ckY+Q7Zcm8JPZG/cSHFYF8+iJkp4kEDUK8ZTFK8PiJ2aOU0CF4r8S8lMzhCMdZ2Df8O5uVjLsHuomk6jfI+xsPLxjeN4s1Q6ZQxGyBaQ4vDhbyoieLI5agJI9IZ/EuNtkL/+4yZ7gRFTAKf6CjEWccqDRzP6GcX2/gZMWNof5w2qGpCpqsu1bQnAB9w2ZnHZzKDqUMYckUePH/C6CFTiBVXxOcH6/8GRmLU6zNUc8UYAqU55WgBSNXNsFoUzjNg3lvHlOMtQ9K8HS3NG5MuO66gfNW3AcGkql/0KfyUhIcVHxqJqu89sjwWnPABTgy1Z9UdWzseJjqNxV0+M1KhnAijsk/O49KBMeK6dAGheSklYZaGLjCgdy8wdaVCFLjC9DAigRcp7mGWu54JOlP6ByujEmHXFNeWWEQJ25JlsRdQfscvfKV0IUH69oAiN/WJ78OWj1fzXXAAnlPI5txlw2Rm3ONchUhGhc/PaMVnw89h1bpNLbEMkYXE5RAcgoXt0LNg4kT0cJfYfzliCgwYZXnQXlZFg5kBhGtHIMTlsRcEx5Dg2WsBO6vIBkUY12EQoDu4blQD5iekaC0D8DkDM4VfsCfAPLVsyxYSOxEIAFoKo5ugESW3gMvQ4WAgqRb2QU/R4jcwvoBVY9AebIy0ZOEejuNev4DYFKV86WaYGTo+J0ChN96stEPUcArc/ZhoAe30PB8A8iEI7u0ESsIZ5daIElVo38YyMesm8VxQqADylc/LagItV8BUfwZLfBRAQCwc0dJMRLs1B+WaIGIwHDLKMYFUcBDgjDRUZzdb6SYe1ZZRYR990EKhVw0m8MFsXnaXI+xyZ9HF5U5YH0WsB6r43O30vqnpPCcyplE21DrCsCvB9aQSYaykZg9tIUatT4B/XupPTuX2OODhHNPdfkDPfJM+ZP6w6i/bD4Fx0SxWuZJjFJnIUXZSY30FNByvQTLqdWMiTq7MZJg+bdoxuG1RMgOYsHbPDO/n1x6o4QdD/i4dHgGA2BrQg0EbVpwHU5yhTpCaPgSsfZkUeB1gtRM93+4VNSeYwIiIePy170aNFBHQOHxzIz1WmPceqJ2uGeEcbh2Uv2op2OF2IIkRHmf3m4gDlHC6Wj2dfNw1oV9uCUJ2OUC4kw7Ss+rDjDtKVS9yB6r75lGubwLLhmjODVhJ+Yz+zOrnd5Jtz8k+iy0J70Ps8XG6t7dKdutjHmoT03ef0aquZ6goDaPM8QeqvxWeT6ON4OmPO8OTNuVACqrruU0fUXL9P+uN//2q599sGCrqpJqShY/bFHCNtpuA1H5vQAueqSHGjifogSCBXkDAvkIBvFKOGomSvwGvNyw2TVqygBowBaAfSinJkMSJ40IoeiDu/IAlZ7pkpAu4IjdLHaMzUQehXHzL+Xtw2pYbAFgddbmUtAsxIBoWHRtywgcx5GDoSlnX54BaxwKT/0RVWHdHOa1nLA3FZxXu4evLE00vDKd9WOAEuz8iEs39k+ASjByG0v3VWBtBMJOltrz2CiPhEiKJZ1IgCUYLi7lSx/PrmwVhUZiV/QJRh76najyZ4M6fhlH1Z9DboE4zAVrLmUOkJYD+YVhBKXoEmo3wYLiZPmdeO9KiN/AjAO49ju0ZoPOEpVOMGsikjpGjQJdZZBeXz3UQ8vtLRO5evzgDG5DS+qCR7nAX0ip7DNwVBJJZAK0J1XV3XmrenKy6pqCB1Df2Ecflk4SC5Y2LGn3UxXvunENvD+SF3DWI0+q/KwE0GXYCSX1nV7na0WGKbbcHZouJbh++vhfPyvRh/vB3QJhpNusLufk/F01BlN+73nz03tZPsB3QeUp92jDiAbEARaylZTtElrKDGDq1agSSj5Y2XrAboEI8chN7UAvQ2LqFsqEcT8E03+8JC6gB7hJH0ATE1AJ52CKhkkBSDZ7rLrepSDpNny9pVVDrKOSe74l/qAOgFD7lyNOoHk81V1tFQGssmTN6ilhiBV6a1vQ3qmkF8PtkweVLeazKi/WqFLeTS3HjnRbZ6l10iqBtWBcPO2gvS7VbbOVQMqvV1kQ0Q5IHoqc0z+qQuIzOHNa1KyYG9w6+b+7i5b0dy8uScHV9y8T0oZfKHXNNPCQPaBbzfPX9xR3Vxld14VgUyn7fY9tjvCabt1JviArFYgtcMOqkIWS5NvSFxdkNVVeetk/g8yJFQz2qhyZEiYe4RaPZAu4R+Imw5I1zRGbWrS8iFVwj9h7fdItYfW7UcVP0gr+PoznzDVL1UzI64OSCnSTzgo+FaREgEP/kDY9IvkVhL9xgtoLpDEtV0Nab9xJJ28aPyFuDBCgttm3z6FeI44USPcG6+9uEIrNoIz+CvezBHXAz8qmDlSMCaXNr/BOTDuRnBRQOv8LS3zg8mZ0XcrmBpTAmbHdSqCWdXPUhDmgS40YVvaX9OiJzx0Vtr6vc7y/Qd3J+T5KX4KLgAAAABJRU5ErkJggg==' width='30px' />
                    </div>
                </div>
            </div>
        )
    }
}
