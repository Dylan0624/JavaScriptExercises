/**
 * File: promises.js
 * Description: 展示 JavaScript 中的 Promise 用法與進階技巧
 * 
 * 本練習涵蓋:
 * - Promise 基礎
 * - Promise 鏈
 * - 錯誤處理
 * - Promise.all, Promise.race, Promise.allSettled
 * - 非同步函數
 */

export default function runPromisesExercise() {
    // 創建一個用於顯示結果的元素
    const resultElement = document.getElementById("exercise-result");
    resultElement.innerHTML = '<div id="promise-results" class="promise-results"></div>';
    const resultsContainer = document.getElementById("promise-results");
    
    // 輔助函數 - 顯示訊息
    function logMessage(message, isError = false) {
        const msgElement = document.createElement("div");
        msgElement.className = isError ? "error-message" : "info-message";
        msgElement.textContent = message;
        resultsContainer.appendChild(msgElement);
        console.log(isError ? `錯誤: ${message}` : message);
    }
    
    // 第1節: Promise 基礎
    logMessage("===== Promise 基礎 =====");
    
    // 創建一個簡單的 Promise
    function createSimplePromise() {
        return new Promise((resolve, reject) => {
            // 模擬異步操作 (例如: API 請求)
            setTimeout(() => {
                const success = Math.random() > 0.3; // 70% 成功率
                
                if (success) {
                    resolve("操作成功！");
                } else {
                    reject(new Error("操作失敗！"));
                }
            }, 1000);
        });
    }
    
    // 使用 Promise
    logMessage("開始簡單 Promise 示範...");
    
    createSimplePromise()
        .then(message => {
            logMessage(`Promise 完成: ${message}`);
        })
        .catch(error => {
            logMessage(`Promise 失敗: ${error.message}`, true);
        })
        .finally(() => {
            logMessage("Promise 完成了，不管成功或失敗");
        });
    
    // 第2節: Promise 鏈
    setTimeout(() => {
        logMessage("\n===== Promise 鏈 =====");
        
        // 模擬一系列的異步操作
        function fetchUserData(userId) {
            logMessage(`正在獲取用戶 ${userId} 的資料...`);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        id: userId,
                        name: `用戶 ${userId}`,
                        email: `user${userId}@example.com`
                    });
                }, 1000);
            });
        }
        
        function fetchUserPosts(user) {
            logMessage(`正在獲取 ${user.name} 的文章...`);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        user: user,
                        posts: [
                            { id: 1, title: "第一篇文章" },
                            { id: 2, title: "第二篇文章" }
                        ]
                    });
                }, 1000);
            });
        }
        
        function fetchPostComments(postData) {
            const firstPost = postData.posts[0];
            logMessage(`正在獲取「${firstPost.title}」的評論...`);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        user: postData.user,
                        post: firstPost,
                        comments: [
                            { id: 1, text: "很棒的文章！" },
                            { id: 2, text: "謝謝分享！" }
                        ]
                    });
                }, 1000);
            });
        }
        
        // 使用 Promise 鏈
        fetchUserData(123)
            .then(user => fetchUserPosts(user))
            .then(postsData => fetchPostComments(postsData))
            .then(result => {
                logMessage(`完成所有請求：${result.user.name} 的文章「${result.post.title}」有 ${result.comments.length} 則評論`);
            })
            .catch(error => {
                logMessage(`處理過程中出錯: ${error.message}`, true);
            });
        
        // 第3節: 錯誤處理
        setTimeout(() => {
            logMessage("\n===== Promise 錯誤處理 =====");
            
            // 可能會失敗的操作
            function riskyOperation(id, shouldFail) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (shouldFail) {
                            reject(new Error(`操作 ${id} 失敗`));
                        } else {
                            resolve(`操作 ${id} 成功`);
                        }
                    }, 1000);
                });
            }
            
            // 錯誤處理示例 1: 捕獲並繼續
            logMessage("示例 1: 捕獲錯誤並繼續");
            
            riskyOperation(1, true) // 這個會失敗
                .then(result => {
                    logMessage(`結果: ${result}`);
                    return riskyOperation(2, false); // 這個會成功
                })
                .catch(error => {
                    logMessage(`捕獲錯誤: ${error.message}`, true);
                    // 發生錯誤後，我們回到正軌並繼續鏈
                    return riskyOperation(2, false);
                })
                .then(result => {
                    logMessage(`繼續執行，結果: ${result}`);
                });
            
            // 第4節: Promise 並行操作
            setTimeout(() => {
                logMessage("\n===== Promise 並行操作 =====");
                
                // 創建一些異步操作
                function fetchResource(id, time, shouldFail = false) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (shouldFail) {
                                reject(new Error(`資源 ${id} 請求失敗`));
                            } else {
                                resolve(`資源 ${id} 的數據`);
                            }
                        }, time);
                    });
                }
                
                // Promise.all - 全部完成或任一失敗
                logMessage("使用 Promise.all() - 等待所有 Promise 完成");
                
                const allPromises = [
                    fetchResource(1, 1000),
                    fetchResource(2, 1500),
                    fetchResource(3, 800)
                ];
                
                Promise.all(allPromises)
                    .then(results => {
                        logMessage(`所有請求都完成了: ${results.length} 個成功結果`);
                    })
                    .catch(error => {
                        logMessage(`有一個請求失敗: ${error.message}`, true);
                    });
                
                // Promise.race - 第一個完成的勝
                logMessage("\n使用 Promise.race() - 採用第一個完成的結果");
                
                const racePromises = [
                    fetchResource(4, 1000),
                    fetchResource(5, 1500),
                    fetchResource(6, 500) // 這個最快
                ];
                
                Promise.race(racePromises)
                    .then(result => {
                        logMessage(`最快的請求完成了: ${result}`);
                    })
                    .catch(error => {
                        logMessage(`最快的請求出錯了: ${error.message}`, true);
                    });
                
                // Promise.allSettled - 等待所有完成，不管成功或失敗
                logMessage("\n使用 Promise.allSettled() - 等待所有 Promise 解決");
                
                const mixedPromises = [
                    fetchResource(7, 800),
                    fetchResource(8, 1000, true), // 這個會失敗
                    fetchResource(9, 1200)
                ];
                
                Promise.allSettled(mixedPromises)
                    .then(results => {
                        logMessage(`所有請求都解決了，結果如下:`);
                        results.forEach((result, index) => {
                            if (result.status === 'fulfilled') {
                                logMessage(`  - 資源 ${index + 7} 成功: ${result.value}`);
                            } else {
                                logMessage(`  - 資源 ${index + 7} 失敗: ${result.reason.message}`, true);
                            }
                        });
                    });
                
                // 第5節: Promise 進階技巧
                setTimeout(() => {
                    logMessage("\n===== Promise 進階技巧 =====");
                    
                    // 取消一個 Promise 的技巧
                    logMessage("示範可取消的 Promise");
                    
                    function createCancellablePromise(delay) {
                        let cancelFn;
                        
                        const promise = new Promise((resolve, reject) => {
                            const timerId = setTimeout(() => {
                                resolve("操作完成");
                            }, delay);
                            
                            // 存储取消函數
                            cancelFn = () => {
                                clearTimeout(timerId);
                                reject(new Error("操作被取消"));
                            };
                        });
                        
                        // 返回 Promise 和取消方法
                        return {
                            promise,
                            cancel: cancelFn
                        };
                    }
                    
                    const { promise, cancel } = createCancellablePromise(3000);
                    
                    promise
                        .then(result => {
                            logMessage(`可取消的 Promise 結果: ${result}`);
                        })
                        .catch(error => {
                            logMessage(`可取消的 Promise 錯誤: ${error.message}`, true);
                        });
                    
                    // 1.5 秒後取消
                    setTimeout(() => {
                        logMessage("取消操作");
                        cancel();
                    }, 1500);
                    
                    // 超時模式
                    logMessage("\n示範 Promise 超時模式");
                    
                    function withTimeout(promise, timeoutMs) {
                        // 創建一個會超時的 Promise
                        const timeoutPromise = new Promise((_, reject) => {
                            setTimeout(() => {
                                reject(new Error(`操作超時 (${timeoutMs}ms)`));
                            }, timeoutMs);
                        });
                        
                        // 使用 race
                        return Promise.race([promise, timeoutPromise]);
                    }
                    
                    // 一個需要很長時間的操作
                    const longOperation = new Promise(resolve => {
                        setTimeout(() => {
                            resolve("長時間操作完成");
                        }, 4000);
                    });
                    
                    // 給它一個 2 秒的超時
                    withTimeout(longOperation, 2000)
                        .then(result => {
                            logMessage(`操作結果: ${result}`);
                        })
                        .catch(error => {
                            logMessage(`操作未完成: ${error.message}`, true);
                        });
                    
                    // 第6節: 重試機制
                    setTimeout(() => {
                        logMessage("\n===== Promise 重試機制 =====");
                        
                        // 一個可能會失敗的操作
                        function unreliableOperation() {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const random = Math.random();
                                    if (random < 0.7) { // 70% 失敗率
                                        reject(new Error(`操作失敗 (${random.toFixed(2)})`));
                                    } else {
                                        resolve(`操作成功 (${random.toFixed(2)})`);
                                    }
                                }, 1000);
                            });
                        }
                        
                        // 重試函數
                        function retry(operation, maxAttempts, delay = 1000) {
                            return new Promise((resolve, reject) => {
                                function attempt(attemptNumber) {
                                    logMessage(`嘗試 ${attemptNumber}/${maxAttempts}`);
                                    
                                    operation()
                                        .then(resolve) // 如果成功，立即解決
                                        .catch(error => {
                                            logMessage(`嘗試 ${attemptNumber} 失敗: ${error.message}`, true);
                                            
                                            if (attemptNumber < maxAttempts) {
                                                // 準備下一次嘗試
                                                setTimeout(() => {
                                                    attempt(attemptNumber + 1);
                                                }, delay);
                                            } else {
                                                // 達到嘗試上限，傳遞最後一個錯誤
                                                reject(new Error(`達到最大嘗試次數 (${maxAttempts})，放棄操作`));
                                            }
                                        });
                                }
                                
                                // 開始第一次嘗試
                                attempt(1);
                            });
                        }
                        
                        // 使用重試機制
                        retry(unreliableOperation, 5, 1000)
                            .then(result => {
                                logMessage(`最終成功: ${result}`);
                            })
                            .catch(error => {
                                logMessage(`無法完成操作: ${error.message}`, true);
                            });
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 2000);
}