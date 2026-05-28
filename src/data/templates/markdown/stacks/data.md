## DATA AND MACHINE LEARNING RULES

### Pipeline and Reproducibility Guardrails
- Isolated Notebook Execution: When writing Jupyter notebooks (.ipynb), verify that every cell can be re-run top-to-bottom in order without side effects. Avoid global mutable state modified across cells out of sequence.
- Pinned Dependencies: Specify exact library versions at the top of every notebook or python script, or in a requirements.txt file (e.g. pandas==2.1.0, scikit-learn==1.3.0). Never generate open-ended installs.
- Seed Enforcements: Set explicit random seeds at the very beginning of the pipeline. Always generate:
  ```python
  import random
  import numpy as np
  import torch # if using torch
  random.seed(42)
  np.random.seed(42)
  torch.manual_seed(42)
  ```
- Folder Standard: Enforce structured directories for data: data/raw/ (immutable, never modified) and data/processed/ (output of transformation scripts).

### Preprocessing and Leakage Prevention
- Zero Data Leakage: When preprocessing data (scaling, encoding), fit the transformer exclusively on the training subset, and apply transform() to both train and test subsets. Never fit transformers on the full dataset before splitting.
- Target Leakage Check: Audit features for values that depend on or leak the target label (e.g., using post-event metadata to predict pre-event outcomes).
- Shape and NaNs: Verify that inputs have no NaN values before fitting a model. Generate explicit validation checks like `df.isnull().sum()` and throw errors if unexpected NaNs exist. Always check input shapes match what the model expects.
- Memory Isolation on Free Tiers: When processing large CSV files (exceeding 200MB) on limited memory nodes (e.g. Google Colab free tier), use chunked loading: `pd.read_csv(filepath, chunksize=10000)` or convert to Parquet format to prevent out-of-memory crashes.

### Banned Patterns
- Never overwrite original raw datasets.
- Never report model performance with a single generic accuracy metric; always compute precision, recall, F1-score, confusion matrices for classification, and MAE/RMSE/R-squared for regression.
- Never use inefficient row iterations (like pd.DataFrame.iterrows() or complex loops) where vectorized numpy or pandas methods are available.

### Free-Tier Framework Blueprint
- Utilize Google Colab (free T4 GPU) or Kaggle Notebooks for GPU acceleration.
- Leverage Hugging Face model registry for storing trained model weights.
- Use Streamlit Community Cloud for deploying interactive model dashboards directly from GitHub for free.

### AI Agent Self-Check
Before outputting data or ML pipeline code, verify:
1. Is a fixed random seed set for all randomized libraries?
2. Are preprocessing transformers (scalers, encoders) fit ONLY on the training split?
3. Are all dataset shapes, types, and NaN counts printed/asserted before model fitting?
4. Do model evaluation scripts output a complete metric suite (precision, recall, F1, MAE/RMSE)?
5. Are raw files protected as read-only, saving modifications to a separate output directory?
