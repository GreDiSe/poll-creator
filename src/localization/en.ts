export const en = {
    navigation: {
        createPoll: 'Create Poll',
        viewPolls: 'View Polls',
    },
    createPoll: {
        title: 'Create Your Poll',
        question: {
            label: 'Poll Question',
            placeholder: 'Ex: What should we have for lunch tomorrow?',
        },
        options: {
            label: 'Poll Options',
            placeholder: 'Ex: Pizza',
            addButton: 'Add',
            removeButton: 'Remove',
        },
        loading: 'Creating...',
        submit: 'Submit',
    },
    openedPoll: {
        options: 'Options:',
        close: 'Close',
        delete: 'Delete',
    },
    notifications: {
        pollCreated: 'Poll created successfully!',
        pollDeleted: 'Poll deleted successfully!',
        createPollError: 'Failed to create poll. Please try again.',
        fetchPollsError: 'Failed to fetch polls',
    },
    validation: {
        questionRequired: 'Please enter a question',
        minimumOptions: 'Please add at least 2 options',
        optionRequired: 'Please enter an option',
        duplicateOption: 'This option already exists',
    },
    polls: {
        errors: {
            enterQuestion: 'Please enter a question',
            minOptions: 'Please add at least 2 options',
            enterOption: 'Please enter an option',
            optionExists: 'This option already exists',
            createFailed: 'Failed to create poll. Please try again.',
            deleteFailed: 'Failed to delete poll. Please try again.',
            fetchFailed: 'Failed to fetch polls',
            generic: 'An error occurred.',
        },
        success: {
            created: 'Poll created successfully!',
            deleted: 'Poll deleted successfully!',
        },
    },
    pollList: {
        emptyState: {
            title: 'No polls available',
            subtitle: 'Click here to create a new poll',
        },
    },
};
