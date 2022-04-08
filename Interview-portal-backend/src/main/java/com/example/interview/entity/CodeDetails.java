package com.example.interview.entity;

import javax.persistence.Entity;

//@Entity
public class CodeDetails {
    private String clientId;
    private String clientSecret;
    private String script;
    private String language;
    private String versionIndex;
    private String stdin;

    @Override
    public String toString() {
        return "CodeDetails{" +
                "clientId='" + clientId + '\'' +
                ", clientSecret='" + clientSecret + '\'' +
                ", script='" + script + '\'' +
                ", language='" + language + '\'' +
                ", versionIndex='" + versionIndex + '\'' +
                ", stdin='" + stdin + '\'' +
                '}';
    }

    public String getStdin() {
        return stdin;
    }

    public void setStdin(String stdin) {
        this.stdin = stdin;
    }

    public String getScript() {
        return script;
    }

    public void setScript(String script) {
        this.script = script;
    }

    public String getClientId() {
        return clientId;
    }

    public String getVersionIndex() {
        return versionIndex;
    }

    public void setVersionIndex(String versionIndex) {
        this.versionIndex = versionIndex;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }
}
