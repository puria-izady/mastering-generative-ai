# Lab 2: Image Generation with Amazon Bedrock

## Overview
Generate images using Amazon Bedrock's Stable Diffusion and Nova Canvas models for various creative applications.

## Learning Objectives
- Use Amazon Bedrock for image generation
- Work with Stable Diffusion and Nova Canvas models
- Implement image-to-image transformations
- Apply different artistic styles and aspect ratios

## Setup
```bash
# From project root
uv add boto3 pillow requests

# Configure AWS credentials
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_REGION=us-east-1
```

## Files
- `Lab2_Bedrock_Nova.ipynb` - Nova Canvas image generation
- `Lab2_Bedrock_Nova_Advanced.ipynb` - Advanced Nova features
- `example_images/` - Sample input images
- Generated output images with various styles and ratios

## Usage
1. Select the `mastering_genai` kernel in Jupyter
2. Configure AWS credentials
3. Run the Nova notebooks to generate images

## Models
- Amazon Nova Canvas - Latest image generation model
- Stable Diffusion - Classic text-to-image generation