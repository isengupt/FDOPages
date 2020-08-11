import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, ListField, ListItemField, NestField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import 'uniforms-bridge-simple-schema-2';





const EditFundraising = ({schema, submit, model, toggleState}) => {
    return (
        <Grid container centered>

        <Grid.Column>
            <Header as="h2" textAlign="center">Edit Mission</Header>
            
            {model ?
                <AutoForm schema={schema} onSubmit={data => submit(data)} model={model} >
                    <Segment>




                 
                        <NestField name="fundraising">
                                <TextField name="fundName" />
                                <TextField name="fundLink" />

                            </NestField>

                        <SubmitField value='Submit' />

                        <ErrorsField />
                    </Segment>
                </AutoForm>
                :
                null


            }

<div>

<a
    onClick={(event) =>
        event.stopPropagation() ||
        event.preventDefault() ||
        toggleState("Initiatives")
    }
    className="information-link"
>
    Edit Initiatives
</a>
</div>

<div>

<a
    onClick={(event) =>
        event.stopPropagation() ||
        event.preventDefault() ||
        toggleState("ElectionDate")
    }
    className="information-link"
>
    Edit Election Date
</a>
</div>

<div>

<a
    onClick={(event) =>
        event.stopPropagation() ||
        event.preventDefault() ||
        toggleState("Advisor")
    }
    className="information-link"
>
    Edit Advisor
</a>

<a
    onClick={(event) =>
        event.stopPropagation() ||
        event.preventDefault() ||
        toggleState("History")
    }
    className="information-link"
>
  Edit History
</a>

<a
    onClick={(event) =>
        event.stopPropagation() ||
        event.preventDefault() ||
        toggleState("Leadership")
    }
    className="information-link"
>
    Edit Leadership
</a>
</div>
        </Grid.Column>
    </Grid>
    )
}

export default EditFundraising;