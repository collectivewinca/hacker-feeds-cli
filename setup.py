from setuptools import setup, find_packages

setup(
    name="cli-anything-hacker-feeds-cli",
    version="1.0.0",
    description="Agent-native Python CLI for Hacker News, Product Hunt, GitHub Trending, Reddit & V2EX feeds",
    long_description="A thin Python wrapper around the hacker-feeds-cli Node.js CLI. "
    "Provides agent-native interface for fetching feeds from Hacker News, "
    "Product Hunt, GitHub Trending, Reddit, V2EX, DEV.to, Lobsters, and EchoJS.",
    author="Mayandev",
    author_url="https://github.com/Mayandev",
    url="https://github.com/collectivewinca/hacker-feeds-cli",
    packages=find_packages(),
    python_requires=">=3.10",
    install_requires=["click"],
    entry_points={
        "console_scripts": [
            "cli-anything-hacker-feeds-cli=cli_anything.hacker_feeds_cli:main",
        ],
    },
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: ISC License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Topic :: Internet :: WWW/HTTP :: Indexing/Search",
    ],
    keywords="hacker-news product-hunt github-trending reddit v2ex cli agent",
)
