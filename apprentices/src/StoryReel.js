import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel__upper">
            <div className="texto">
                <h1>Share your Knowledge!</h1>
            </div>
            <div className="storyReel">

                <Story
                    image="https://img.r7.com/images/2016/12/15/57x1ar3jng_2j6ycmid83_file?dimensions=460x305"
                    title="Ciências Exatas"
                />
                <Story
                    image="data:image/jpeg;base64,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"
                    title="Ciências Biológicas"
                />
                <Story
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt3gvc505QjLKuQO087BnU1AiVcHFMbfyqA&usqp=CAU"
                    title="Idiomas"
                />
                <Story
                    image="https://www3.unicentro.br/petfisica/wp-content/uploads/sites/54/2017/07/gosto-musical.jpg"
                    title="Música"
                />
                <Story
                    image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUSEhIVFRUVDw8QFRAVFRAQFQ8VFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QGi0dHR0tKy0tLS0rLS0tLS0rNy0tKzcrKy0rKy0tKy0rLS0tKystLS0tLS03LSstKy0tNy0tN//AABEIAK4BIgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwEEBQYABwj/xABIEAABAwIBBwcHCAkFAAMAAAABAAIDBBESBRMhMVFhkQYUQVJxgaEiMpKxwdHSFUJDU1RicvAWIzNjgpOUorKDo8LD4TRz0//EABkBAQEBAQEBAAAAAAAAAAAAAAEAAgMEBf/EACQRAQACAgMAAQMFAAAAAAAAAAABEQISITFRQWGB8AMTInHB/9oADAMBAAIRAxEAPwD5spC8AiAWy8AiAUhEAmigBMa1QAmtCjDwCkBSpAQXsK9hRAIg1BKwL2FPEaMRKSrgXsCuCFEIFJQLEJYtE06E06FTPwIgxXebKRToNKYYjDFbECIQIapRcxJcxaRgQOgUaZhYhLFomnUc3UqZ+bRCNXubohToVKAiKIQrRbTJjKU7FW1TObAmtgWkyl3J7KVFmmYIExsC1W0qcyk3KtMfm69zZbgo0YokWmDzRDzMrpBQqRQJ2Tm+aHYpXS/J68rZPnIRBBdGwLu8hjQmtjRRMVqOJTUQriNGI1dZTpradDVKIjRCJaAp01tMizTObCmsp1pNpk5lLuVapmtp0badazaVNbSrOxpktpkQp1stpEYpNyzsmJzdTzZbYpEXNEbFg81Xuare5ovc0RsYYXNVPNluc1XjSq2aphmmQmlW7zVe5qjY0wOabl7me5dBzVEKVGzVOeFGiFJuXQikTG0aNzq59lGdicyj3LoGUYT2UY2I3NOfZRbk9lDuXQx0Y2J7aMbEbqoc8yiTW0S6AUg2KebhG4phto09tBuW1HShWmQjYjcS50USIUa330wQZhOwYvM15beYUK2D88MV2mpyehdPDkKJo1XVyGja3U0L2bQ88YOegpDsV6KmWzmxsQujCNm6UWQprYU0hE1yLKGwpzIFLCrDAszKAyFPZCjY1PY1ZmUW2FNbEmtanNYsTKpXESMRKwGow1ZsqohRZlWgxFgRaU8yvZlXMC9gRZUsypzKuYFOBWzSjmV7MK9gUYEWVPMIhCreBSGIs2qiFMbCrIYmtYi1ZDIVYjhTmNTBZZtWBkSZhXsa9dQC5ea1FZeCTYgmNQBG1KGFOBS1MCmZKzalMXlC3zAiyAy2VShywx+h4wni09/QtMU7dY1HYvZPHbmqEknQhddOdTubc9F+1LBN0ksLwarAAOsWQujsq0FoKax6FgR4UJZilVpj1ntCdG5ZmE0GvTWyqmyRHdYmFa6JAjEizTJZeFQjVW1Q9EHhZYqd6IVO9GptpY1ONZnOd6nnW9GqaeNexrM50vc63o1aamNRjCzOd717ne9WpamNSHhZXO96NtSjUtVrwmCQLMbOhdUrOpabqlCJ7rOa4lWYitaql2NysMKqRlPa5ZmAeFNkoOTVJIKNoQtTLDpSrS1OCWCAia+6GZGvL1lKg/P2eARQ5bfGfJd/DrB7lXqKN46CqMkLti+k4TMw7DJ3K6J3kyjAesPKb7x4roIo45G4mOBBGhzSCDwXyd8adRVssLsUTy09NtTu0HQVznDwxn6+mSUzhr070uIDw1LDyVy4GhtQy37xlyO9nuv2Lqqd0M7MUTmuB6WkaO3YVibjtuJielEb0bY1YkpHDeEqwBt07NirIWtTGtRNCbg2IAGtTWrzQisi0hzLqvJEVbARBFqmTJcJDqghbT4gVUno1qMoTO52VBqypmpiFWc1aqEdzwqDW71XIS3NVUFaNco58qgjJVqClVMQViGclaMD9CRBTgK0xq5y3BjXEp7GpbWpzQsNWcxqfGUhpT2rKWGOVgJETVZY0fnUiRImN0J7Wpd7b9ya1hO7cgCH5sja031d+1FHEAmPeGi7iANp0IZtDYtulNaxZ0uVmDQwFx4D3pDqiaTcNg8n/wBTQbVxtULG5k5SijT5bTZVLtFopdzHZt/oP1pzp6Y6JGPiP32G3EXC+bSzkp1Nlmoj8yV4HVJxt9F1wvoauG76A7IUE2mKRhP3XA+CoVPJKQaRpXNxcpz9LTxP+8y8DuIuPBbdByri+bUTw/dlbn2cRc27gj+UG8ZUavI0jNbSe5VYRLC7GxzmO2tJHcdvYu5o8tyyDyRT1Q/dvDX97dPqCKWrpH6J4ZIT95hcOLbo2n5hawy8lctnts2oZjH1jLNd3t1Hususoq2CpbeJ4ebaW+a8drTpWEeTNPMLwSsduDgbdo6FjVfJeeJ2JtwQdDhdpHYQszGM9cNfyj6u85vp0cNSHCb7Dv1Fcrk/lPVQENqI863Vi0NkHfqd38V1mS8rQVI/VvGLWY3DC9va0+saFjKMsezExIi3aisnSUx1jh0II26bajbV0LFkICIRImi+iyMNIVaJLbLxCsa0Do0WVOWAFZ1TRrYIUviuFqMqFOVlZbWkN8oq7lqzUrJEWJdb4sLFNSq6yKysiOwUhi5zLcAazQjaEWGyLCstIYrETULbHQnxx927pWZNvMarTY9uhDACdQsNu1WWRWsTpOgaFmZFvRjYLkbVYZFfzl7FhF3ENG828Urn99ETC87fNbx1lHMhfjZZLnr42aCbnqt8o+4d6qSQSO/ayBg6oOEH2lOpqeNo8lrnb7YRxKqBbqyZ+hjQwbT5TvcPFTHkpzjieSTvJKmfLEUeh0kbfutvK7+3QFnzcpo9TWPfveQxvoi6efhNyKljb0jsGnwCsggC+Gw2us0eK5J2XJnai1g2Mb7TcpWJzjdxc47SSfWqg63nzPrI+K8uZDDsUIpU+Uu5Ju6CCkSckZegXV1uRohqbUs7I3n/ABTWUAHm1VQ38QnZ6yvfblUMOTktMPmKrJyemHzDwXWxxyjzcodzjf1gq1C2s+bVRv7WsP8AxVY1h8+fkiQHzSN9tSv02V66EWEry3qSWmb2WeDbuXcB9b0tpX9oAPg4KSZz5+T4372PI9hROR1ckzlI13/yKRt/rIHOheN4abi/eFuZL5TNGiOvez9zWMxN7M4LjxCdPHT3/WUNTHvYGPHjZVnZLye/6SSM/vInjxAIRNSuXTDKJc289I2Rh+mpnNkB32v7VVOSqKoP6mYMkvcMfeJ4O69vBYVPyWAdipK1gd+7mzbj2gEHir0sGUGC08EdSza9gD7bpGW4kFZqup/Pub9dBFPWU2iVpmZ1vngfi+d38VsUlZHMP1btNtLDoc3tb7dS42gy62PyRJPSn6qZpqYDuBAxNHcFtNqI5AHvjAtqq6R2dYN7mt8pvZpWMsfz8/xqJbmZtq4KMW7uSKOqdhvibPH9bHYvZ+NivsLXC4II2j86FyngkAXUEWTHttv9YUXHdtUiw269K2wTmR9KVU3NmtaXOcQ0NaL2uQC47Gi4uToCvlOF5R1F5MI2rayBTWYCucy/TSMqw2Rhabm1/nAEi7TqI0awu3yXFaMdi75zWMMx289q81qY8aUtp0+xcnQWvoRMAOtPZBi1jRbfdWIqcDo7yszJstkewW37U+GnAN+napdIG6OnoGm57AASe4FZtZlyJhIdIL9QEk97I7u9JzVmImelbWMjQbXJd1GjE7gNXelzTv1Ymxbv2svcwXt4rBGV5n+TBTvI+9+pZ3sj0uHa5T8m1rh5cwhYdbY8MA9IeUe8rWldi2lKYo7OktfokqpGtP8ADHe/cLKtNyshGhrpJPuwszLPTd5SzBkejYbvqWOd0lt5XH0bq5BU0bPNjlkO3A1o8SFqo/sEuy7UvP6qFkf3iDK/0naPBCaGrn/ave7cScPojQtRmVz9FSd7newD2pgrK12pjGdjCf8AIlX2SpS8mXdK1YOTgGtVxTVrvOlcOzCz/EIhkKV3nvefxOcfWVmZ+qaLcnws85zR2kD1o21FK36Rnd5XqVKPk4BrVhmRoxrcOIWUf8p03W/tf7lCH5Ni6zeLfevIT4szIDB5stU3sxewp8eSnDzaurHdK72reZTSdZvBnwpgpZOszhH8C9s5MawxW0k326oH4oHO9bSmc2n+1B346U+wBbbKeTrs4M+BWBDL1mf2/AszkqYkUdQPpqfviljTbz9LqZ3+rg/yYVttjk60ffb3JjWSbYuDvejY0x46mcamxncyWI+qRisionI0wOPeH/8A6LUbGenM8H/GizDelsHAj2lZnKDTGlwOH6ym7cUQ9ZEaCBlOP2ZfEdkUkrP7Y8YXQRwt6GsH4JXs9TVYFNcaWuI/+wSeDwjdUwyx50Z4PHVnjhk8QWyeCrPyQ0OxiExP6JaaV0Tj/py4T3XK6QZLj6hG8MjHjGQVLMkNHmPezsLhftxhyP3IFOcwSNcCXNe/oc8OoKjsElsEnZpur8OUi1wEgIebaXNbBK7t+im7iCtX5OkAsHNcOq5uG/aWHT6KruyeQMJic0HWGYHsP+mQAfQJVtEql2nqA8HSLjXoLSPxNOlnfo3lQ9ttWj2rLFAQRm3WLdTBiBb2RuIcwdhA+6U1mUC3yZW/xDT7B6hfoHSs6+IeW8qNp4g8385oNmh5DdbiAXC5tfp12WdT1MwronTmZkT24Io4R5WN1i1shaHa7C4F9I0aFS5TVjJIzA1we9zowwgjyHOdhaDvNyLa9KZQ8jqqPNS5274nB4jkkswPDg4BodcYTYaRs1bOmOMRHLMyp8oHRSVTZHSVLzHFhkidhLo3NLsYiL2MOBpBHlAHWukyVJiiad2zDcdBt0XFisLlDyNqHl8sdzcufm2kEAOe8nymmx13AsNDukhaPJewjbDYtexl3tdYG97OdfUW3vpVnWvBx7azGbB3p8VONJA3k9A7+hKkq2t0MGN1ui+Ht0AucN7QVUmEsnnGzegC7WjujNz3vb2LlUtWt1FfFGcJOJ/Ubdx4AE99rb1QrMoy6jggHQZXBr+6JhL7/wAXcmxZNcBYXDT0BwgZ3iEEu/ienQ5MwaiyPfHCzxe8vPgriExRDndB5zUAnS1jBTQntBsT2kFWoaaSMaIaWnG2V+Nw4kDwWo6kiPnySP3GYkegMI8F6Kmp2ebCz0Hk8dKdizXTX8+vP4YGnwMbfahbRUpNyyomPWLT63lb7Kpo81gH8IHrARfKD+hnDD8SNpTLjp2jzKFx/G9rfUCrEEFR8yjgZvLnPPgArfP39WT/AGviXjXO2P4xhVyjWRVX7lvY0+0pgpKjpnA7GsHsVR1WerftkaPYgNQfqoz2zNH/ABRUpe5sfnVJ9MN9SjNQ9M9/4y72qoKp/RFF/UD3KRWy9EcX9QSqpS3hph84nsa93qCISQDUx57I3e0BVBV1HRHH/NcUXOKr6qP0nn2qpLXOIvqZfRHvXlUz9X9VF/f8S8ik5kUA6v8AeUxtFuHplS2E/u+JTGRH7niu1pDaXc3009tN+HsuhEbtrfFG2F20ePvWbQ20/wCHiExtP2eHvS8y7aP7veiEDto4uWUe2Hf6vemBnZ4e9JELtvi73IxG7b4u9yEc1m4cf/UYgHUCUGHrHifcmNB2+tZRzIABqt2aEwMG0+tKBJ2JzSdviQsoYA2+xMazZ4f+IWH83CMNB6PAFSBNTtcLOaD2gFc9yjiayPQ61/Ju65DBrc/boF9AXRytsNBI7z7dC5HlFVkVMEJbnM+XQYTht5bXXLtIFgGk9y3+n2zPRPJHJkQmEcsjGyiHOl5MTpGNfiMccIc39o3S46DbELectmSmL6M0U73SBzzK4sidPLbGJBiJDhfHc3I1G1gAp5G1bJWPbmnXZPUS54huCQvllaWxHXqYNdtGHWLE9JlCrFJRulwEkNBIaNJc7pPeeAXWcptimRk2sidHBTA4Y4BEM6bskwsFg22FuC5DcRFha4sL3FHlJRQyPeIZWOliEcxAcLxg4g3FhGgHAQewG17BaNdRBsMTw0hwjjFrEkXA0O6e1VcnZXhYeZinc0ulcRK1kTIXkxulLi8EXPRe2sBEZXyZih5Kga+Nrg03IuW2IDXfOGi3TdXuZnoFuHs96ocl2uZGWPFjjc4C+OwJu2zunRbStsntXHLuW1I0Dto4H/k4hKOSiNTyOxtMP+sq+e/w9yi24+KLks92TT0yv/mMZ/jGEDslj62T+qmb6gtLBuPF3vUYPxek/wB6rlMs5Jb0vf8A1lSvfIjD0v8A6up9y1M3+L0nr2b/ABek/wB6dpTLGQWbZe6pqEYyG3r1A7Kib2laAi/Fxd70Wb3nw9qdpTPGRyNU1T/PcfWVPyW/7RUem13rWgLjp/x9yIP/ADcK2lM35Pl6KibvbE71tU8yn+vd3xQ+wLRDj+SixH82Vchmc1m+sYe2H3FezE37o/6Ug9q1Lnf4KdO/g1VplZqXqxeg9eWrb82avKtOWDN7uLEWbG13FqwxywoftLOF/YiHLKh+0M4exdNcvFcNzAPvekEbYx970ysMcsqH7Szhb2Iv0wodfOWdwBKNcvFcNzNjf6ZUiJu0+mVh/ppQ/aW+ifcvfpvQ/aR6D/hRrl4rh0Aibv8ASKYIW/klc4OXNB9pHoS6f7VI5eUH2j/bm+BGmfiuHSCFuzxKMRDZ4rmxy7oPtP8AtzfAjby5oftQ9CX4UaZeK4dEIhs8UYhbs8Vzw5bUX2pvoyfCp/TSi+1M4P8AhVpl4rh0Qpm7B4IhTDf3F3vWDHyxo/tMXeQ312VuDlLSu82eI9kkfqxK1y8VtGWnNtDncR7QuQ5VwBpjlfpzby8HCHHEGuwjiezUurbXxuFwb9NwHOHEXWVlt8T43Nc8C7SNN2aCNOk2ThMxkpIyDVTx1eYa5hpWwy1TfJDTFjcXYX31ua4FtgRo1jRc9UK5r47ixBYMIv5JDhrD9RFjo3L5XR5UYL0srs404425tzw+zmm9i04vKs1pto2g2C6Sgc00UcFNUNBbI9wlcXskwOkeS1zdtiANJ0gE7F1zw5Yh0tZVgRDOG1msDz5Vr2Fw3RdxJ1ALJyTWVmCpimDYxGXSMkO14c5rdFw9oaWnENNxaw6M2ucwvY6WYMIcJcTX57CcLvIb0YbuvrN8LbixWDl3lpT5xsRxHC4OL2mV+w6Q0G7iLaTqtbRoRjhPwZdzyXYc00uOkgE6tZ2bluYd643JPLajwgBzhuMdUP8AqWk7lpSD557mVB/61zywyvo3DfMe9AYt6wv00pOsfRm+BT+mNL1z6Mp9TVnTLw22sz2Kcx2LGHK+k659CX4UR5XUY+kPcyQ+xWuXitq5ns4f+qRD2cFiu5ZUY+e/uhnP/FSOWVH9Y7+TP8KtcvFbYzG4Kc3uCyRyuo/rT/Km+FEOVVIfpT/Ll9ytcvFbVwKQzt4rNbyjpT9Lxa8exN+XKf6xvirWfEvCM7VObO1UW5agOqRqYMqQ9dvEKqUt4F7B2cFU+VYeuF75Wh64VUpcwdnBeVP5Wh648V5VSnzAUcfVHAIxSx9RvAIBIjDl7eUPm8fUHAKRTs6o4BCCjDkJIo2dUcAiFFH1W8AozhXs4rkGNoouq3gEbaeLqN4BIzhRNcjknc1j6o4BEKOPqjggYU5pRyhMpGdVvAJnNI+q3gEAcmNcszZMbAzqt4BPY1o6BwCrY0QesylvEqdXhI0gKXP0KpO9OMCWRV5Eikde2E30OaS0jeCNSin5K2JIlm09OK/iRddDQQA6VuwxAxpy/VmBrDh28l7G+dm/mObo2aLaE6iyJDFoEY7xddeI9OlKracWR+7MqoVqONoGgDgFbwDYFnQO0qzjWJgn4G7AvYRsCTnFONFI/RsXtGxIziBz1UT3EbAhu3YFXL1GNVJauNgRXGxVQ5QZE0lsPCnOhU84vCVVJczy9nlTD17OJpLmcXs4qmcXg5VJbxryq415VJ//2Q=="
                    title="Literatura"
                />
                <Story
                    image="https://deolhonofuturo.uninter.com/wp-content/uploads/2020/06/arte-cultura-pandemia-1200x675.jpg"
                    title="Artes"
                />
            </div>
        </div>
    )
}

export default StoryReel