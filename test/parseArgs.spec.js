import { describe, it, expect } from "vitest";

const parseArgs = require("../lib/parseArgs.js");

describe("parseArgs", () => {
  const defaultVersion = "5.5.1";

  it("only width and height", () => {
    const args = ["50%", "50%"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50%",
      height: "50%",
      version: defaultVersion,
      type: "",
      args: [],
    });
  });

  it("width, height, version", () => {
    const args = ["50%", "50%", "5.5.0"];
    const content = "{a: 1}";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{a: 1}",
      width: "50%",
      height: "50%",
      version: "5.5.0",
      type: "",
      args: [],
    });
  });

  it("width, height, version, type", () => {
    const args = ["50%", "50%", "5.5.0", "simple"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50%",
      height: "50%",
      version: "5.5.0",
      type: "simple",
      args: [],
    });
  });

  it("width, height, type", () => {
    const args = ["50%", "50%", "simple"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50%",
      height: "50%",
      version: defaultVersion,
      type: "simple",
      args: [],
    });
  });

  it("width, height, type, args", () => {
    const args = ["50%", "50%", "simple", "arg1", "arg2"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50%",
      height: "50%",
      version: defaultVersion,
      type: "simple",
      args: ["arg1", "arg2"],
    });
  });

  it("width, height, args", () => {
    const args = ["50%", "50%", "arg1", "arg2"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50%",
      height: "50%",
      version: defaultVersion,
      type: "",
      args: ["arg1", "arg2"],
    });
  });

  it("width, height, version, args", () => {
    const args = ["50%", "50%", "5.5.0", "arg1", "arg2"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50%",
      height: "50%",
      version: "5.5.0",
      type: "",
      args: ["arg1", "arg2"],
    });
  });

  it("width, height, version, type, args", () => {
    const args = ["50%", "50%", "5.5.0", "simple", "arg1", "arg2"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50%",
      height: "50%",
      version: "5.5.0",
      type: "simple",
      args: ["arg1", "arg2"],
    });
  });

  it("without %", () => {
    const args = ["50", "50"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50px",
      height: "50px",
      version: defaultVersion,
      type: "",
      args: [],
    });
  });

  it("px", () => {
    const args = ["50px", "50px"];
    const content = "";
    const result = parseArgs(args, content);
    expect(result).toEqual({
      id: expect.any(String),
      options: "{}",
      width: "50px",
      height: "50px",
      version: defaultVersion,
      type: "",
      args: [],
    });
  });
});
