module.exports = {
    apps: [{
        name: "webrtcsignaller",
        script: 'webrtcsignaller.js',
        watch: true,
        exec_mode: "cluster",
        instances: 1,
        args: "--ssl --port=8085",
        env: {
            "NODE_ENV": "prod"
        },
        env_prod: {
            "NODE_ENV": "prod"
        },
        env_hehllo: {
            "NODE_ENV": "hehllo"
        },
        env_dev: {
            "NODE_ENV": "dev"
        },
        env_test : {
            "NODE_ENV": "test"
        }
    }],

    deploy: {
        production: {
            user: 'SSH_USERNAME',
            host: 'SSH_HOSTMACHINE',
            ref: 'origin/master',
            repo: ' git@github.com:altanai/webrtcsignaller.git',
            path: 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': ''
        }
    }
};
