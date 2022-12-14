describe('GET field NAME', () => {
    it('searching field name into list structure', () => {
        const expectResult =[
            {
                "id":"592f11060f95a3d3d46a987a",
                "idMemberCreator":"5191197f9433cf5507006338",
                "data":{
                    "list":{
                        "name":"Professional",
                        "id":"54a17e9db559f0356ce022e4"
                    },
                    "board":{
                        "shortLink":"BdarzfKF",
                        "name":"Life Goals",
                        "id":"54a17d76d4a5072e3931736b"
                    },
                    "card":{
                        "shortLink":"gplJv6dx",
                        "idShort":2,
                        "name":"Increase revenue by 10%",
                        "id":"54a1844d304d9736e54d2546",
                        "due":"2017-12-12T17:00:00.000Z"
                    },
                    "old":{"due":"2017-05-01T16:00:00.000Z"}
                },
                "appCreator":null,
                "type":"updateCard",
                "date":"2017-05-31T18:52:54.933Z",
                "limits":null,
                "display":{
                    "translationKey":"action_changed_a_due_date",
                    "entities":{
                        "card":{
                            "type":"card",
                            "shortLink":"gplJv6dx",
                            "id":"54a1844d304d9736e54d2546",
                            "due":"2017-12-12T17:00:00.000Z",
                            "text":"Increase revenue by 10%"
                        },
                        "date":{
                            "type":"date","date":"2017-12-12T17:00:00.000Z"
                        },
                        "memberCreator":{
                            "type":"member",
                            "id":"5191197f9433cf5507006338",
                            "username":"brian","text":"briancervino"
                        }
                    }
                },
                "memberCreator":{
                    "id":"5191197f9433cf5507006338",
                    "activityBlocked":true,
                    "avatarHash":"ea3e44de13339407d742667d73d9f280",
                    "avatarUrl":"https://trello-members.s3.amazonaws.com/5191197f9433cf5507006338/ea3e44de13339407d742667d73d9f280",
                    "fullName":"briancervino",
                    "idMemberReferrer":null,
                    "initials":"B",
                    "nonPublic":{},
                    "nonPublicAvailable":true,
                    "username":"brian"
                }
            }
        ]

        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data.list.name).to.equal('Professional')
        })

            .should((response) => {
                cy.log(JSON.stringify(response.body))
            })
    })
})