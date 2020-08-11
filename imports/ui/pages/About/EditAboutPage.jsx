import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { EditPicker, useAccount } from "../../utils/utils"

const EditAboutPage = () => {

    const [toggleState, setToggleState] = useState("mission");
    const { user } = useAccount();
    const [model, setModel] = useState(false)


    const toggleStatePick = (state) => {
        const allowedStates = ["mission", "initiatives", "story"];
        const stateStr = state;
        if (allowedStates.includes(stateStr)) {
            setToggleState(stateStr);
        }
    };

    React.useEffect(() => {
        Meteor.call("retrieveAboutEdit", (e, r) => {
            if (!e) {
               // console.log(r)
                setModel(r)
            }
        })
    }, [user])

    return (
        <>

            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("mission")
                    }
                    className="information-link"
                >
                    Mission
            </a>
            </div>
            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("story")
                    }
                    className="information-link"
                >
                    Story
            </a>
            </div>
            <div>

                <a
                    onClick={(event) =>
                        event.stopPropagation() ||
                        event.preventDefault() ||
                        toggleStatePick("initiatives")
                    }
                    className="information-link"
                >
                    Initiatives
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
        </>
    )







};

export default EditAboutPage