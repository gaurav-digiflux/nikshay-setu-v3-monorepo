import { Query_res_IC } from '@nikshay-setu-v3-monorepo/assets';
import { fontStyles } from '@nikshay-setu-v3-monorepo/constants';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ScreenContainer from '../components/defaultPage';

interface Query {
    subject: string;
    query: string;
}

const QRMScreen: React.FC = () => {
    const [showQueries, setShowQueries] = useState(false);
    const [queries, setQueries] = useState<Query[]>([
        {
            subject: 'Adhi (TB Champion)',
            query:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        },
    ]);

    const handleRaiseQuery = () => {
        setShowQueries(true);
    };

    const handleTrackQuery = () => {
        // Implement logic to track queries
    };

    const handleRespondToQuery = (index: number) => {
        // Implement logic to respond to a query
        console.log(`Responding to query: ${queries[index].subject}`);
    };

    const handleAddQuery = () => {
        setQueries([
            ...queries,
            { subject: '', query: '' },
        ]);
    };

    const handleSubjectChange = (index: number, value: string) => {
        const updatedQueries = [...queries];
        updatedQueries[index].subject = value;
        setQueries(updatedQueries);
    };

    const handleQueryChange = (index: number, value: string) => {
        const updatedQueries = [...queries];
        updatedQueries[index].query = value;
        setQueries(updatedQueries);
    };

    return (
        <ScreenContainer backBtn>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#0B4E67', '#61C9EF']}
                    style={{ borderRadius: 10 }}
                >
                    {!showQueries && (
                        <View style={styles.topContainer}>
                            <Query_res_IC />
                            <Text style={[fontStyles.Maison_600_20PX_23LH, { color: "#FFE7AA", marginVertical: 15, }]}>Query Response Management</Text>
                            <Text style={[fontStyles.Maison_500_18PX_21LH, { color: "#FFFFFF", }]}>
                                Raise a query to your senior doctor
                            </Text>
                            <TouchableOpacity
                                style={styles.button1}
                                onPress={handleRaiseQuery}
                            >
                                <Text style={{}}>Raise a Query →</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleTrackQuery}
                            >
                                <Text style={styles.buttonText}>Track a Query</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </LinearGradient>
                {showQueries && (
                    <ScrollView style={styles.queriesContainer}>
                        <Text style={styles.queriesTitle}>
                            Queries Pending for you to Answer
                        </Text>
                        {queries.map((query, index) => (
                            <View key={index} style={styles.queryContainer}>
                                <View style={styles.querySubjectContainer}>
                                    <TextInput
                                        style={styles.querySubjectInput}
                                        placeholder="Query Subject"
                                        value={query.subject}
                                        onChangeText={(value) =>
                                            handleSubjectChange(index, value)
                                        }
                                    />
                                    <TouchableOpacity
                                        style={styles.addQueryButton}
                                        onPress={handleAddQuery}
                                    >
                                        <Text style={styles.addQueryButtonText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TextInput
                                    style={styles.queryInput}
                                    placeholder="Query"
                                    multiline={true}
                                    value={query.query}
                                    onChangeText={(value) =>
                                        handleQueryChange(index, value)
                                    }
                                />
                                <TouchableOpacity
                                    style={styles.respondButton}
                                    onPress={() => handleRespondToQuery(index)}
                                >
                                    <Text style={styles.respondButtonText}>
                                        Respond to Query →
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    topContainer: {
        alignItems: 'flex-start',
        padding: 20,
        borderRadius: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'transparent',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#ffff",
        width: '100%',
        alignItems: 'center',
    },
    button1: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
    },
    queriesContainer: {
        flex: 1,
        marginTop: 20,
    },
    queriesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    queryContainer: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
    },
    querySubjectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    querySubjectInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    addQueryButton: {
        backgroundColor: '#4CAF50',
        padding: 8,
        borderRadius: 5,
        marginLeft: 10,
    },
    addQueryButtonText: {
        color: '#fff',
    },
    queryInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    respondButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    respondButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default QRMScreen;