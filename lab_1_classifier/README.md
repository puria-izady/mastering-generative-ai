# Lab 1: Deep Learning Image Classification with PyTorch

## Overview
Build an image classifier using PyTorch to identify different types of flowers from the Oxford Flowers 102 dataset.

## Learning Objectives
- Set up a PyTorch development environment
- Load and preprocess image data
- Build, train, and evaluate a deep learning classifier
- Implement custom neural network components

## Setup

### Setup
```bash
# From project root, add dependencies
uv add torch torchvision matplotlib scikit-learn pandas seaborn tqdm ipywidgets ipykernel

# Install Jupyter kernel
uv run python -m ipykernel install --user --name mastering_genai --display-name "mastering_genai"
```

## Files
- `lab1_nn_training.ipynb` - Main training notebook
- `oxford_flower_102_name.csv` - Flower category mappings
- `flower.classifier.v0.pt` - Trained model weights
- `images/jacket.png` - Test image

## Usage
1. Select the `mastering_genai` kernel in Jupyter
2. Run `lab1_nn_training.ipynb`
3. The notebook will download the Oxford Flowers 102 dataset automatically

## Dataset
Oxford Flowers 102 dataset with 102 flower categories, each having 40-258 images.