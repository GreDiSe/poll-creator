import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NotificationContainer, NotificationItem, CloseButton } from './Notification.styles';
import { removeNotification } from '../../store/notificationSlice';
import { RootState } from '../../store/store';

const Notification: React.FC = () => {
    const notifications = useSelector((state: RootState) => state.notifications);
    const dispatch = useDispatch();
    const [closingIds, setClosingIds] = useState<string[]>([]);

    const handleClose = useCallback(
        (id: string) => {
            setClosingIds((prev) => [...prev, id]);
            setTimeout(() => {
                dispatch(removeNotification(id));
                setClosingIds((prev) => prev.filter((closeId) => closeId !== id));
            }, 300);
        },
        [dispatch],
    );

    useEffect(() => {
        notifications.forEach((notification) => {
            if (notification.autoClose) {
                const timer = setTimeout(() => {
                    handleClose(notification.id);
                }, notification.duration || 5000);

                return () => clearTimeout(timer);
            }
        });
    }, [notifications, handleClose]);

    return (
        <NotificationContainer>
            {notifications.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    $closing={closingIds.includes(notification.id)}
                >
                    {notification.message}
                    <CloseButton onClick={() => handleClose(notification.id)}>×</CloseButton>
                </NotificationItem>
            ))}
        </NotificationContainer>
    );
};

export default Notification;
