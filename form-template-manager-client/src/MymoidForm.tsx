import * as React from 'react';
import { ChildProps, graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { TemplateQuery } from './schema';

const StyledView = styled.View`
    margin-top: 50px;
    background-color: papayawhip;
    background-color: ${props => props.theme.backgroundColor};
`;

const StyledText = styled.Text`
    fontSize: 20px;
    margin-top: 10px;
    margin-left: 5px;
    color: palevioletred;
`;

const StyledTextInput = styled.TextInput`
    height: 40; 
    borderColor: rgb(0, 0, 0)';
    borderWidth: 1;
    margin: 5px;
`;


type State = {
    text: string;
};

type Props = {};

class MymoidForm extends React.Component<ChildProps<Props, TemplateQuery>> {
    state: State = {
        text: 'Useless Placeholder'
    };

    onPress = () => { console.log('Screen pressed') };

    render() {
        if (this.props.data === undefined || this.props.data.loading) {
            return <Text>Loading</Text>;
        }
        if (this.props.data.error) {
            return <Text>Error {JSON.stringify(this.props.data.error)}</Text>;
        }
        const theme = this.props.data.template;
        return (
            <StyledView theme={theme}>
                <Image source={require('./unnormalized-white-logo.png')} />
                <StyledText>Some input label</StyledText>
                <StyledTextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <StyledText>Some input label</StyledText>
                <StyledTextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <StyledText>Some input label</StyledText>
                <StyledTextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <StyledText>Some input label</StyledText>
                <StyledTextInput
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text style={{ fontSize: 10 }}>Fiscal address ...</Text>
            </StyledView>
        );
    }
}

const enhance = compose(
    graphql(gql`{
        template(id: "59f31a53926fb6a5f350d251") {
            id
            backgroundColor
        }
    }`)
);

export default enhance(MymoidForm);