import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, ListField, ListItemField, NestField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import 'uniforms-bridge-simple-schema-2';





const EditMission = ({schema, submit, model, toggleState}) => {
    return (
        <Grid container centered>

        <Grid.Column>
            <Header as="h2" textAlign="center">Edit Mission</Header>
            
            {model ?
                <AutoForm schema={schema} onSubmit={data => submit(data)} model={model} >
                    <Segment>


                        <HiddenField name="organizationName" />

                 
                        <NestField name="mission">
                                <TextField name="mission" />
                                <TextField name="vision" />

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
                toggleState("Story")
              }
              className="information-link"
            >
              Edit Story
            </a>
          </div>
        </Grid.Column>
    </Grid>
    )
}

export default EditMission;