## Contributing to Bot Flows

We welcome contributions of all kinds! Your help is appreciated. Follow these steps to get involved:

1. **Fork this repository**: Start by forking the Bot Flows repository to your GitHub account.

2. **Clone the repository**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/flows-test
   ```
3. **Create a branch**: For your contribution, create a new branch.
   ```bash
   git checkout -b your-branch-name
   ```
4. **Make your changes**: Edit or add files as necessary.
5. **Test your changes**: Ensure that your changes look correct and follow the style set in the codebase.
6. **Commit your changes**: Once you're satisfied with your changes, commit them with a meaningful message.

```bash
git commit -m "Description of your changes"
```

7. **Push your changes**: Push your branch to your forked repository.

```bash
git push origin your-branch-name
```

8. **Submit a Pull Request (PR)**: Open a PR from your forked repository to the main branch of this repo.
   > Important: Describe the changes you've made clearly!

Our maintainers will review your PR, and once everything is good, your contributions will be merged!

## Code Style and Documentation

### Python Code Style

We use Ruff for code linting and formatting. Please ensure your code passes all linting checks before submitting a PR.

### Docstring Conventions

We follow Google-style docstrings with these specific conventions:

**Regular Classes:**

- Class docstring describes the class purpose and key functionality
- `__init__` method has its own docstring with complete `Args:` section documenting all parameters
- All public methods must have docstrings with `Args:` and `Returns:` sections as appropriate

**Dataclasses:**

- Class docstring describes the purpose and documents all fields in a `Parameters:` section
- No `__init__` docstring (auto-generated)

**Properties:**

- Must have docstrings with `Returns:` section

**Abstract Methods:**

- Must have docstrings explaining what subclasses should implement

**`__init__.py` Files:**

- **Skip docstrings** for pure import/re-export modules
- **Add brief docstrings** for top-level packages or those with initialization logic

**Enums:**

- Class docstring describes the enumeration purpose
- Use `Parameters:` section to document each enum value and its meaning
- No `__init__` docstring (Enums don't have custom constructors)

**Code Examples in Docstrings:**

- Use `Examples:` as a section header for multiple examples
- Use descriptive text followed by double colons (`::`) for each example
- **Always include a blank line after the `::"`**
- Indent all code consistently within each block
- Separate multiple examples with blank lines for readability

**Lists and Bullets in Docstrings:**

- Use dashes (`-`) for bullet points, not asterisks (`*`)
- **Add a blank line before bullet lists** when they follow a colon
- Use section headers like "Supported features:" or "Behavior:" before lists
- For complex nested information, consider using paragraph format instead

**Deprecations:**

- Use `warnings.warn()` in code for runtime deprecation warnings
- Add `.. deprecated::` directive in docstrings for documentation visibility
- Include version information and describe current status
- Describe parameters in present tense, use directive to indicate deprecation status

#### Examples:

```python
# Regular class
class MyService(BaseService):
    """Description of what the service does.

    Provides detailed explanation of the service's functionality,
    key features, and usage patterns.

    Supported features:

    - Feature one with detailed explanation
    - Feature two with additional context
    - Feature three for advanced use cases
    """

    def __init__(self, param1: str, old_param: str = None, **kwargs):
        """Initialize the service.

        Args:
            param1: Description of param1.
            old_param: Controls legacy behavior.

                .. deprecated:: 1.2.0
                    This parameter no longer has any effect and will be removed in version 2.0.

            **kwargs: Additional arguments passed to parent.
        """
        if old_param is not None:
            import warnings
            warnings.warn(
                "Parameter 'old_param' is deprecated and will be removed in version 2.0.",
                DeprecationWarning,
            )
        super().__init__(**kwargs)

    @property
    def sample_rate(self) -> int:
        """Get the current sample rate.

        Returns:
            The sample rate in Hz.
        """
        return self._sample_rate

    async def process_data(self, data: str) -> bool:
        """Process the provided data.

        Args:
            data: The data to process.

        Returns:
            True if processing succeeded.
        """
        pass

# Dataclass with code examples
@dataclass
class MessageFrame:
    """Frame containing messages in OpenAI format.

    Supports both simple and content list message formats.

    Example::

        [
            {"role": "user", "content": "Hello"},
            {"role": "assistant", "content": "Hi there!"}
        ]

    Parameters:
        messages: List of messages in OpenAI format.
    """

    messages: List[dict]

# Enum class
class Status(Enum):
    """Status codes for processing operations.

    Parameters:
        PENDING: Operation is queued but not started.
        RUNNING: Operation is currently in progress.
        COMPLETED: Operation finished successfully.
        FAILED: Operation encountered an error.
    """

    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
```