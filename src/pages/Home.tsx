import { Button, Column, Input, List, Row, Text } from 'components';
import { useState } from 'react';

export const Home = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ label: string }[]>([]);

  const handleOkButton = () => {
    if (!taskName) return;

    setTasks((previous) => {
      const copy = [...previous];
      copy.push({ label: taskName });
      return copy;
    });
    setTaskName('');
  };

  return (
    <div>
      <Column width="600px" margin="0 auto">
        <Text fontSize="bodyLarge" fontWeight="bold" my="10px" pl="10px">
          Tasks
        </Text>
        <Row width="100%">
          <Input
            flex={1}
            placeholder="Enter a task name here..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Button onClick={handleOkButton}>OK"</Button>
        </Row>

        <List items={tasks}></List>
      </Column>
    </div>
  );
};
