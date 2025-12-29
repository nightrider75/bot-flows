<h1><div align="center">
 <img alt="voicing bot engine" width="500px" height="auto" src="
</div></h1>

[![PyPI](https://img.shields.io/pypi/v/flows-test)](https://pypi.org/project/flows-test) [![Docs](https://img.shields.io/badge/Documentation-blue)]() [![Discord](https://img.shields.io/discord/1239284677165056021)](https://discord.ggbot-engine)

Voicing Flows is an add-on framework for [Voicing]() that allows you to build structured conversations in your AI applications. It enables you to create both predefined conversation paths and dynamically generated flows while handling the complexities of state management and LLM interactions.

The framework consists of:

- A Python module for building conversation flows with Voicing
- A [visual editor](#flows-test-Editor) for designing and exporting flow configurations

## Dependencies

- Python 3.10 or higher
- [Voicing]()

## Installation

1. Install uv

   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

   > **Need help?** Refer to the [uv install documentation](https://docs.astral.sh/uv/getting-started/installation/).

2. Install the module

   ```bash
   # For new projects
   uv init my-flows-test-app
   cd my-flows-test-app
   uv add flows-test

   # Or for existing projects
   uv add flows-test
   ```

> **Using pip?** You can still use `pip install flows-test` to get set up.

## Contributing to the framework

1. Clone the repository and navigate to it:

   ```bash
   git clone 
   cd flows-test
   ```

2. Install development dependencies:

   ```bash
   uv sync --group dev
   ```

3. Install the git pre-commit hooks (these help ensure your code follows project rules):

   ```bash
   uv run pre-commit install
   ```

   > The package is automatically installed in editable mode when you run `uv sync`.

## Tests

The package includes a comprehensive test suite covering the core functionality.

### Setup Test Environment

1. **Install Dependencies**:
   ```bash
   uv sync --group dev
   uv add "bot-engine[google,aws,openai,anthropic]"
   ```

### Running Tests

Run all tests:

```bash
uv run pytest tests/
```

Run specific test file:

```bash
uv run pytest tests/test_state.py
```

Run specific test:

```bash
uv run pytest tests/test_state.py -k test_initialization
```

Run with coverage report:

```bash
uv run pytest tests/ --cov=flows_test
```