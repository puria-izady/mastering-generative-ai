# Lab 0: Environment Setup

## Overview
Set up your development environment with UV, a fast Python package manager that will be used throughout all labs.

## Learning Objectives
- Install UV package manager
- Understand the benefits of UV for Python development
- Prepare your system for the upcoming labs

## Prerequisites
- macOS, Linux, or Windows with WSL
- Internet connection for downloading UV

## Installation

### Install UV
```bash
# Install UV using the official installer
curl -LsSf https://astral.sh/uv/install.sh | sh

# Restart your shell or source your profile
source ~/.bashrc  # or ~/.zshrc depending on your shell
```

### Verify Installation
```bash
# Check UV version
uv --version

# Should output something like: uv 0.x.x
```

### Initialize Project Environment
```bash
# Navigate to the project directory
cd mastering-generative-ai

# Add core dependencies
uv add jupyter boto3 torch==2.2.2 torchvision transformers

# Sync uv
uv sync

# Install Jupyter kernel
uv run python -m ipykernel install --user --name mastering_genai --display-name "mastering_genai"
```

## What is UV?
UV is an extremely fast Python package installer and resolver, written in Rust. It's designed as a drop-in replacement for pip and pip-tools, offering:

- **Speed**: 10-100x faster than pip
- **Reliability**: Better dependency resolution
- **Simplicity**: Single tool for package management
- **Compatibility**: Works with existing Python projects

## Next Steps
Once UV is installed, you're ready to proceed to [Lab 1](../lab_1_classifier/) where you'll use UV to set up your first AI project environment.

## Troubleshooting

### Permission Issues
If you encounter permission issues, you may need to restart your terminal or run:
```bash
source ~/.bashrc  # or ~/.zshrc
```

### Windows Users
For Windows users, use WSL (Windows Subsystem for Linux) or install UV using PowerShell:
```powershell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

---
**Next**: [Lab 1 - Image Classification](../lab_1_classifier/)