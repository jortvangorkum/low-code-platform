import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Dispatch, memo, SetStateAction } from 'react';
import { Instance, useReactFlow } from 'react-flow-renderer';
import { Controller, useForm } from 'react-hook-form';
import { CreateVariableData, VariableTypes } from '.';

interface ICreateVariableActionModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: CreateVariableData;
  nodeId: string;
}

function onSubmit(
  setOpen: Dispatch<SetStateAction<boolean>>,
  setNodes: Instance.SetNodes<CreateVariableData>,
  nodeId: string,
) {
  return (data: CreateVariableData) => {
    setOpen(false);
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = data;
        }
        return node;
      }),
    );
  };
}

const CreateVariableActionModal = memo(function CreateVariableActionModal({
  open,
  setOpen,
  data,
  nodeId,
}: ICreateVariableActionModal) {
  const { control, handleSubmit } = useForm<CreateVariableData>({
    defaultValues: data,
  });
  const { setNodes } = useReactFlow();

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogTitle>Create Variable</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit(setOpen, setNodes, nodeId))}>
          <Grid container spacing={2} paddingTop={1}>
            <Controller
              name='expression'
              control={control}
              render={({ field }) => (
                <Grid item xs={12}>
                  <TextField
                    {...field}
                    label='Expression'
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
              )}
            />
            <Controller
              name='result.type'
              control={control}
              render={({ field }) => (
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select {...field} label='Type'>
                      <MenuItem value={VariableTypes.String}>String</MenuItem>
                      <MenuItem value={VariableTypes.Number}>Number</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )}
            />
            <Controller
              name='result.name'
              control={control}
              render={({ field }) => (
                <Grid item xs={12}>
                  <TextField {...field} label='Name' fullWidth />
                </Grid>
              )}
            />
          </Grid>
          <DialogActions>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
});

export default CreateVariableActionModal;
