import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { EditPicker, useAccount } from "../../utils/utils"
import { set } from 'react-ga';

const EditCommunityPage = () => {

    const [toggleState, setToggleState] = useState("history");
    const { user } = useAccount();
    const [model, setModel] = useState(false)




    const toggleStatePick = (state) => {
        const allowedStates = ["history", "chapterinitiatives", "fundraising", 'electiondate', 'leadership'];
        const stateStr = state;
        if (allowedStates.includes(stateStr)) {
            setToggleState(stateStr);
        }
    }

    React.useEffect(() => {
        Meteor.call("getCurrentCommunityData", (e, r) => {

            if (!e) {
                console.log(r)
                setModel(r)



            }
        })
    }, [user])

    return (
        <div>
            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("history")
                    }
                    className="information-link"
                >
                    History
</a>
            </div>
            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("electiondata")
                    }
                    className="information-link"
                >
                    Election Date
</a>
            </div>
            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("chapterinitiatives")
                    }
                    className="information-link"
                >
                    Initiatives
</a>
            </div>
            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("fundraising")
                    }
                    className="information-link"
                >
                    Fundraising
</a>
            </div>
            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("leadership")
                    }
                    className="information-link"
                >
                    Leadership
</a>
            </div>
            {toggleState ?
                <div>
                    <EditPicker toggleState={toggleState} model={model} />
                </div> :
                <div>
                    Loading
</div>
            }

        </div>
    )




};

export default EditCommunityPage