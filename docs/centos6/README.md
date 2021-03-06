# CentOS Extended Support

## Introduction

:::warning
You do not need ELS for CentOS 6 subscription if you are already using CloudLinux OS 6. Find more information [here](https://docs.cln.cloudlinux.com/billing/#cloudlinux-os-6-extended-lifecycle-support)
:::

CentOS 6 extended support from CloudLinux allows you to continue running your CentOS 6 server after the end of CentOS 6 support in November 2020.

CloudLinux provides CentOS 6 extended support through the year 2024.

CentOS 6 extended support from CloudLinux doesn't require migration. You just run an installer script that adds a new repository file. No reboot is necessary.

We provide continual updates for Apache, PHP, MySQL, Glibc, OpenSSL, OpenSSH, and cPanel. See the full list of supported packages [here](https://cloudlinux.com/extended-supported-packages).

:::warning
There are no trials available for CentOS Extended Lifecycle Support
:::

## Enabling CentOS 6 ELS Repository (If you are not using local mirror)

To enable the CentOS 6 ELS repository on a server, follow these steps:

1. Download an installer script:

```
wget https://repo.cloudlinux.com/centos6-els/install-centos6-els-repo.py
```

2. Run the installer script with an activation key:

```
python install-centos6-els-repo.py --license-key XXX-XXXXXXXXXXXX
```

3. The script will create the `/etc/yum.repos.d/centos6-els.repo` yum repository config file and install the `centos-els-release` package containing the repository PGP key.

   * To ensure that installation has been completed successfully, run the following command:

    ```
    rpm -q centos-els-release
    ```
    It should return the installed package name and version:
    
    ```
    centos-els-release-6-6.10.1.el6.x86_64 
    ```

4. After this, you will be able to install updates from the repository using a regular `yum upgrade` command.

```
yum update sudo 
```


## Switching to use only ELS mirrors

Starting from the `centos-els-release-6-6.10.2.el6` version (released on 2020-09-08) our `centos-els-release` package will obsolete the `centos-release` package in order to switch clients to use our CentOS ELS repositories instead of upstream ones.

Basically, the `base`, `updates`, `extras`, `centosplus`, `contrib`, and `fasttrack` repositories will be reconfigured for our mirrors.

Already registered users will receive this update from our `centos6-els` repository with the following commands:

```
yum clean all
yum upgrade centos-els-release
```

For newly registered servers the updated package will be installed automatically by our installer script.

To ensure that installation has been completed successfully run the following command:

```
rpm -q centos-els-release
```

It should return the installed package name and version:

```
centos-els-release-6-6.10.2.el6.x86_64
```

Additionally, you can use the `yumdownloader` tool from the `yum-utils` package to verify that our repositories are used:

```
~]# yumdownloader --urls mc
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
https://repo.cloudlinux.com/centos/6/os/x86_64//Packages/mc-4.7.0.2-6.el6.x86_64.rpm
```

Here we can see that yum will use our host `repo.cloudlinux.com` instead of a CentOS mirror.

## How to create CentOS 6 ELS mirror

We provide an opportunity to create local mirrors of our centos6-els repositories.

To obtain the access to the local mirroring, provide your External IP address to your Account Manager or [sales@cloudlinux.com](mailto:sales@cloudlinux.com).


Use `rsync` to create a local mirror.


To create a local mirror of repo with centos6-els security updates you need to use `rsync://repo.cloudlinux.com/CENTOS6ELS/`


To create a local mirror of CentOS 6 you need to use `rsync://repo.cloudlinux.com/CENTOS6/`

For example:

```
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6ELS/
rsync  -avSHP --delete rsync://repo.cloudlinux.com/CENTOS6/
```

## Outbound firewall settings

In order to use ELS for CentOS, you need to opent TCP port 443 to the following destinations:
- cln.cloudlinux.com
- repo.cloudlinux.com
- els-rollout.cloudlinux.com
