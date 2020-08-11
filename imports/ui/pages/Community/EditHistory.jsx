import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, ListField, ListItemField, NestField, HiddenField, DateField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import 'uniforms-bridge-simple-schema-2';





const EditHistory = ({ schema, submit, model, toggleState }) => {
    return (
        <Grid container centered>

            <Grid.Column>
                <Header as="h2" textAlign="center">Edit Mission</Header>

                {model ?
                    <AutoForm schema={schema} onSubmit={data => submit(data)} model={model} >
                        <Segment>


                          


                            <NestField name="history">
                                <TextField name="founderImage" />
                                <TextField name="founderName" />
                                <TextField name="founderProfileLink" />
                                <TextField name="founderQuote" />
                                <TextField name="founderStory" />

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
                            toggleState("Fundraising")
                        }
                        className="information-link"
                    >
                        Edit Fundraising
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

export default EditHistory;