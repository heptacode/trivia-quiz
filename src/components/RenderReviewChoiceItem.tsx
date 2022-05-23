import { Choice } from '@/types';
import { Alert, FormControlLabel, FormGroup, Radio } from '@mui/material';
import grey from '@mui/material/colors/grey';
import { RenderHTML } from './RenderHTML';

interface Props {
  choice: Choice;
  record: Choice;
}

export function RenderReviewChoiceItem({ choice, record }: Props) {
  if (choice.isAnswer || (!choice.isAnswer && choice.value === record.value)) {
    return (
      <Alert severity={choice.isAnswer ? 'success' : 'error'} icon={false} sx={{ py: 0, my: 1 }}>
        <FormControlLabel
          control={
            <Radio
              readOnly
              sx={{
                py: 0,
                color: grey[800],
                '&.Mui-checked': {
                  color: grey[600],
                },
              }}
            />
          }
          checked={!!(choice.value === record.value)}
          label={<RenderHTML html={choice.value} />}
        />
      </Alert>
    );
  } else {
    return (
      <FormGroup sx={{ px: 2, my: 1 }}>
        <FormControlLabel
          control={<Radio readOnly />}
          checked={!!(choice.value === record.value)}
          label={<RenderHTML html={choice.value} />}
        />
      </FormGroup>
    );
  }
}
