import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, ListField, ListItemField, NestField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import 'uniforms-bridge-simple-schema-2';





const EditInitiatives = ({schema, submit, model, toggleState}) => {
    return (
        <Grid container centered>

        <Grid.Column>
            <Header as="h2" textAlign="center">Edit Initiatives</Header>
            
            {model ?
                <AutoForm schema={schema} onSubmit={data => submit(data)} model={model} >
                    <Segment>


                        <HiddenField name="organizationName" />

                 

                        <ListField name="initiatives.organizationInitiatives">
                      
                                    <TextField name="$" />
                             
                                
                        </ListField>

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
                toggleState("Mission")
              }
              className="information-link"
            >
              Edit Mission
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
              Edit story
            </a>
          </div>
        </Grid.Column>
    </Grid>
    )
}

export default EditInitiatives;