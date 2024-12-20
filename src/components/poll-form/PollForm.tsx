import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setQuestion, setNewOption, addOption, removeOption } from '../../store/poll/pollSlice';
import { Input } from '../input';
import { FormContainer, FormGroup, OptionContainer, Footer, Title, FormPadding, AddButton } from './PollForm.styles';
import { Button } from '../button';
import { List } from '../../pages/create-poll/components/List';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from './PollForm.styles';

const MAX_OPTIONS = 10;

interface Props {
    onSubmit(): void;
}

const PollForm: React.FC<Props> = ({ onSubmit }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { question, newOption, options, errors } = useSelector((state: RootState) => state.polls.form);
    const {
        status,
        form: { errors: formErrors },
    } = useSelector((state: RootState) => state.polls);
    const isLoading = status === 'loading';
    const { t } = useTranslation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormPadding>
                <Title>{t('createPoll.title')}</Title>

                <FormGroup>
                    <Input
                        label={t('createPoll.question.label')}
                        type="text"
                        value={question}
                        onChange={(e) => dispatch(setQuestion(e.target.value))}
                        placeholder={t('createPoll.question.placeholder')}
                        error={errors.question}
                    />
                </FormGroup>

                <FormGroup>
                    <OptionContainer>
                        <Input
                            type="text"
                            label={t('createPoll.options.label')}
                            value={newOption}
                            onChange={(e) => dispatch(setNewOption(e.target.value))}
                            placeholder={t('createPoll.options.placeholder')}
                            error={errors.newOption}
                            disabled={options.length >= MAX_OPTIONS}
                        />
                        <AddButton
                            type="button"
                            onClick={() => dispatch(addOption())}
                            disabled={options.length >= MAX_OPTIONS}
                        >
                            +
                        </AddButton>
                    </OptionContainer>

                    <List items={options} onRemove={(index) => dispatch(removeOption(index))} />
                </FormGroup>

                {formErrors.create && (
                    <FormGroup>
                        <ErrorMessage>
                            <p>{t('polls.errors.generic')}</p>
                        </ErrorMessage>
                    </FormGroup>
                )}
            </FormPadding>
            <Footer>
                <Button type="submit" variant="primary" size="medium" isLoading={isLoading}>
                    {t('createPoll.submit')}
                </Button>
            </Footer>
        </FormContainer>
    );
};

export default PollForm;
