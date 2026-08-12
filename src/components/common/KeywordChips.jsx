import { Box, Chip } from '@mui/material';

const KeywordChips = ({ keywords, dense = false }) => {
  if (!keywords || keywords.length === 0) return null;

  return (
    <Box
      className="chip-row-print-style"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: dense ? 0.5 : 0.75 }}
    >
      {keywords.map(keyword => (
        <Chip
          key={keyword}
          label={keyword}
          size="small"
          className="chip-print-style"
          sx={dense ? { height: 22, fontSize: '0.7rem' } : undefined}
        />
      ))}
    </Box>
  );
};

export default KeywordChips;
